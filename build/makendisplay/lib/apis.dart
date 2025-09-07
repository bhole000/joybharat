// ignore_for_file: avoid_dynamic_calls

import 'dart:convert';
import 'dart:developer';
import 'dart:io';
import 'package:das_nursery/youtube.dart';
import 'package:flutter/foundation.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

mixin Apis {
  static String apiKey = "AIzaSyBpW-AH407Kmc4VmlMNgUbbuGII7TbTH14";
  static SharedPreferences? preferences;
  static String upiId = "shantanupal850@okicici";
  static const CHANNEL_ID = 'UCm-Zge1lsDIB-QYlx1Sd5-w';
  static const _baseUrl = 'www.googleapis.com';

  static List<String> quato = [
    "Your path is illuminated by a road-map of stars. I am here to guide you!",
    "We are born at a given moment, in a given place and, like vintage years of wine, we have the qualities of the year and of the season of which we are born.",
    "“There is no better boat than a horoscope to help a man cross over the sea of life.”",
    "We are merely the stars’ tennis-balls, struck and banded which way please them.",
    "The astronomer has a starry map of the past; the astrologer, of our futures.",
    "A child is born on that day and at that hour when the celestial rays are in mathematical harmony with his individual karma.",
    "Astrology reveals the will of the gods.",
    "The starry vault of heaven is in truth the open book of cosmic projection…",
    "Astrology is a Language. If you understand this language, The Sky Speaks to You.",
  ];


  static Future<ChannelInfo> getChannelInfo() async {
    final Map<String, String> parameters = {
      'part': 'snippet,contentDetails,statistics',
      'id': CHANNEL_ID,
      'key': apiKey,
    };
    Map<String, String> headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
    };
    final Uri uri = Uri.https(
      _baseUrl,
      '/youtube/v3/channels',
      parameters,
    );
    final response = await http.get(uri, headers: headers);
    if (kDebugMode) {
      print(response.body);
    }
    final ChannelInfo channelInfo = channelInfoFromJson(response.body);
    return channelInfo;
  }

  static Future<VideosList> getVideosList({
    required String playListId,
    required String pageToken,
  }) async {
    final Map<String, String> parameters = {
      'part': 'snippet',
      'playlistId': playListId,
      'maxResults': '8',
      'pageToken': pageToken,
      'key': apiKey,
    };
    final Map<String, String> headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
    };
    final Uri uri = Uri.https(
      _baseUrl,
      '/youtube/v3/playlistItems',
      parameters,
    );
    final response = await http.get(uri, headers: headers);
    if (kDebugMode) {
      print(response.body);
    }
    final VideosList videosList = videosListFromJson(response.body);
    return videosList;
  }

  static Future<VideosList> searchVideos({
    required String playListId,
    required String pageToken,
    required String query,
  }) async {
    final Map<String, String> parameters = {
      'part': 'snippet',
      'playlistId': playListId,
      'maxResults': '8',
      'pageToken': pageToken,
      'key': apiKey,
      'q': query,
    };
    final Map<String, String> headers = {
      HttpHeaders.contentTypeHeader: 'application/json',
    };
    final Uri uri = Uri.https(
      _baseUrl,
      '/youtube/v3/playlistItems',
      parameters,
    );
    final response = await http.get(uri, headers: headers);
    if (kDebugMode) {
      print(response.body);
    }
    final VideosList videosList = videosListFromJson(response.body);
    return videosList;
  }

  static String? convertUrlToId(String url, {bool trimWhitespaces = true}) {
    if (!url.contains("http") && (url.length == 11)) return url;
    // ignore: parameter_assignments
    if (trimWhitespaces) url = url.trim();
    for (final exp in [
      RegExp(
          r"^https:\/\/(?:www\.|m\.)?youtube\.com\/watch\?v=([_\-a-zA-Z0-9]{11}).*$"),
      RegExp(
          r"^https:\/\/(?:www\.|m\.)?youtube(?:-nocookie)?\.com\/embed\/([_\-a-zA-Z0-9]{11}).*$"),
      RegExp(r"^https:\/\/youtu\.be\/([_\-a-zA-Z0-9]{11}).*$")
    ]) {
      final Match? match = exp.firstMatch(url);
      if (match != null && match.groupCount >= 1) return match.group(1);
    }

    return null;
  }

  static Future<String> getYoutubeThumbnail(String url) async {
    final id = convertUrlToId(url);
    final link = "https://img.youtube.com/vi/$id/0.jpg";
    return link;
  }


  static Future<void> addToErrorLog(
    Object e,
    TextEditingController _phoneCont,
    BuildContext context,
  ) async {
    // await FirebaseFirestore.instance.collection('error_log').add({
    //   "error": "$e",
    //   "source": "doctor app",
    //   "user": _phoneCont.text
    // }).whenComplete(() => Navigator.pop(context));
  }
}
