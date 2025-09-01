// ignore_for_file: deprecated_member_use

import 'package:das_nursery/search_page/widgets/youtube_content.dart';
import 'package:das_nursery/search_page/widgets/youtube_image.dart';
import 'package:das_nursery/search_page/widgets/youtube_title.dart';
import 'package:das_nursery/youtube.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

class VideoDetails extends StatefulWidget {
  final VideoItem post;
  const VideoDetails({Key? key, required this.post}) : super(key: key);

  @override
  State<VideoDetails> createState() => _VideoDetailsState();
}

class _VideoDetailsState extends State<VideoDetails> {
  late YoutubePlayerController _controller;
  bool _isPlayerReady = false;
  @override
  void initState() {
    super.initState();
    _isPlayerReady = false;
    _controller = YoutubePlayerController(
      initialVideoId: widget.post.video.resourceId.videoId,
    )..addListener(_listener);
  }

  void _listener() {
    if (_isPlayerReady && mounted && !_controller.value.isFullScreen) {
      //
    }
  }

  @override
  void deactivate() {
    _controller.pause();
    super.deactivate();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        actions: [
          TextButton(
              onPressed: () => launchUrl(
                    Uri.parse(
                      "https://www.youtube.com/watch?v=${widget.post.video.resourceId.videoId}",
                    ),
                  ),
              child: const Text(
                "YouTube",
                style: TextStyle(fontWeight: FontWeight.bold,color: Colors.redAccent),
              ),
          ),
          const SizedBox(width: 20),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        children: [
          YoutubeImage(
            post: widget.post,
            fromDetails: true,
            controller: _controller,
            onReady: (v) {
              _isPlayerReady = v;
            },
          ),
          const SizedBox(height: 10),
          YoutubeTitle(
            title: widget.post.video.title,
            id: widget.post.id,
            fromDetails: true,
          ),
          const Divider(color: Colors.white60),
          const SizedBox(height: 10),
          YoutubePostContent(
            content: widget.post.video.description,
            id: widget.post.id,
            width: width,
            fromDetails: true,
          ),
          const SizedBox(height: 10),
        ],
      ),
    );
  }
}
