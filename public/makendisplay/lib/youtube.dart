import 'dart:convert';

ChannelInfo channelInfoFromJson(String str) => ChannelInfo.fromJson(jsonDecode(jsonEncode(jsonDecode(str))) as Map<String, dynamic>);
String channelInfoToJson(ChannelInfo data) => json.encode(data.toJson());

class ChannelInfo {
  ChannelInfo({
    required this.kind,
    required this.etag,
    required this.pageInfo,
    required this.items,
  });
  String kind;
  String etag;
  PageInfo pageInfo;
  List<Item> items;
  factory ChannelInfo.fromJson(Map<String, dynamic> json) => ChannelInfo(
        kind: json["kind"].toString(),
        etag: json["etag"].toString(),
        pageInfo: PageInfo.fromJson(json["pageInfo"] as Map<String, dynamic>),
        items: (json["items"] as List)
            .map((x) => Item.fromJson(x as Map<String, dynamic>))
            .toList(),
      );
  Map<String, dynamic> toJson() => {
        "kind": kind,
        "etag": etag,
        "pageInfo": pageInfo.toJson(),
        "items": List<dynamic>.from(items.map((x) => x.toJson())),
      };
}

class Item {
  Item({
    required this.kind,
    required this.etag,
    required this.id,
    required this.snippet,
    required this.contentDetails,
    required this.statistics,
  });
  String kind;
  String etag;
  String id;
  Snippet snippet;
  ContentDetails contentDetails;
  Statistics statistics;
  factory Item.fromJson(Map<String, dynamic> json) => Item(
        kind: json["kind"].toString(),
        etag: json["etag"].toString(),
        id: json["id"].toString(),
        snippet: Snippet.fromJson(json["snippet"] as Map<String, dynamic>),
        contentDetails: ContentDetails.fromJson(
            json["contentDetails"] as Map<String, dynamic>),
        statistics:
            Statistics.fromJson(json["statistics"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "kind": kind,
        "etag": etag,
        "id": id,
        "snippet": snippet.toJson(),
        "contentDetails": contentDetails.toJson(),
        "statistics": statistics.toJson(),
      };
}

class ContentDetails {
  ContentDetails({
    required this.relatedPlaylists,
  });
  RelatedPlaylists relatedPlaylists;
  factory ContentDetails.fromJson(Map<String, dynamic> json) => ContentDetails(
        relatedPlaylists: RelatedPlaylists.fromJson(
            json["relatedPlaylists"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "relatedPlaylists": relatedPlaylists.toJson(),
      };
}

class RelatedPlaylists {
  RelatedPlaylists({
    required this.likes,
    required this.favorites,
    required this.uploads,
    required this.watchHistory,
    required this.watchLater,
  });
  String likes;
  String favorites;
  String uploads;
  String watchHistory;
  String watchLater;
  factory RelatedPlaylists.fromJson(Map<String, dynamic> json) =>
      RelatedPlaylists(
        likes: json["likes"].toString(),
        favorites: json["favorites"].toString(),
        uploads: json["uploads"].toString(),
        watchHistory: json["watchHistory"].toString(),
        watchLater: json["watchLater"].toString(),
      );
  Map<String, dynamic> toJson() => {
        "likes": likes,
        "favorites": favorites,
        "uploads": uploads,
        "watchHistory": watchHistory,
        "watchLater": watchLater,
      };
}

class Snippet {
  Snippet({
    required this.title,
    required this.description,
    required this.publishedAt,
    required this.thumbnails,
    required this.localized,
    required this.country,
  });
  String title;
  String description;
  DateTime publishedAt;
  Thumbnails thumbnails;
  Localized localized;
  String country;
  factory Snippet.fromJson(Map<String, dynamic> json) => Snippet(
        title: json["title"].toString(),
        description: json["description"].toString(),
        publishedAt: DateTime.parse(json["publishedAt"].toString()),
        thumbnails:
            Thumbnails.fromJson(json["thumbnails"] as Map<String, dynamic>),
        localized:
            Localized.fromJson(json["localized"] as Map<String, dynamic>),
        country: json["country"].toString(),
      );
  Map<String, dynamic> toJson() => {
        "title": title,
        "description": description,
        "publishedAt": publishedAt.toIso8601String(),
        "thumbnails": thumbnails.toJson(),
        "localized": localized.toJson(),
        "country": country,
      };
}

class Localized {
  Localized({
    required this.title,
    required this.description,
  });
  String title;
  String description;
  factory Localized.fromJson(Map<String, dynamic> json) => Localized(
        title: json["title"].toString(),
        description: json["description"].toString(),
      );
  Map<String, dynamic> toJson() => {
        "title": title,
        "description": description,
      };
}

class Thumbnails {
  Thumbnails({
    required this.thumbnailsDefault,
    required this.medium,
    required this.high,
  });
  Default thumbnailsDefault;
  Default medium;
  Default high;
  factory Thumbnails.fromJson(Map<String, dynamic> json) => Thumbnails(
        thumbnailsDefault:
            Default.fromJson(json["default"] as Map<String, dynamic>),
        medium: Default.fromJson(json["medium"] as Map<String, dynamic>),
        high: Default.fromJson(json["high"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "default": thumbnailsDefault.toJson(),
        "medium": medium.toJson(),
        "high": high.toJson(),
      };
}

class Default {
  Default({
    required this.url,
    required this.width,
    required this.height,
  });
  String url;
  int width;
  int height;
  factory Default.fromJson(Map<String, dynamic> json) => Default(
        url: json["url"].toString(),
        width: json["width"] as int,
        height: json["height"] as int,
      );
  Map<String, dynamic> toJson() => {
        "url": url,
        "width": width,
        "height": height,
      };
}

class Statistics {
  Statistics({
    required this.viewCount,
    required this.commentCount,
    required this.subscriberCount,
    required this.hiddenSubscriberCount,
    required this.videoCount,
  });
  String viewCount;
  String commentCount;
  String subscriberCount;
  bool hiddenSubscriberCount;
  String videoCount;
  factory Statistics.fromJson(Map<String, dynamic> json) => Statistics(
        viewCount: json["viewCount"].toString(),
        commentCount: json["commentCount"].toString(),
        subscriberCount: json["subscriberCount"].toString(),
        hiddenSubscriberCount: json["hiddenSubscriberCount"] as bool,
        videoCount: json["videoCount"].toString(),
      );
  Map<String, dynamic> toJson() => {
        "viewCount": viewCount,
        "commentCount": commentCount,
        "subscriberCount": subscriberCount,
        "hiddenSubscriberCount": hiddenSubscriberCount,
        "videoCount": videoCount,
      };
}

class PageInfo {
  PageInfo({
    required this.resultsPerPage,
  });
  int resultsPerPage;
  factory PageInfo.fromJson(Map<String, dynamic> json) => PageInfo(
        resultsPerPage: json["resultsPerPage"] as int,
      );
  Map<String, dynamic> toJson() => {
        "resultsPerPage": resultsPerPage,
      };
}

VideosList videosListFromJson(String str) =>
    VideosList.fromJson(jsonDecode(str) as Map<String, dynamic>);
String videosListToJson(VideosList data) => json.encode(data.toJson());

class VideosList {
  VideosList({
    required this.kind,
    required this.etag,
    required this.nextPageToken,
    required this.videos,
    required this.pageInfo,
  });
  String kind;
  String etag;
  String nextPageToken;
  List<VideoItem> videos;
  PageInfo pageInfo;

  factory VideosList.fromJson(Map<String, dynamic> json) => VideosList(
        kind: json["kind"].toString(),
        etag: json["etag"].toString(),
        nextPageToken: json["nextPageToken"].toString(),
        videos: (json["items"] as List)
            .map((x) => VideoItem.fromJson(x as Map<String, dynamic>))
            .toList(),
        pageInfo: PageInfo.fromJson(json["pageInfo"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "kind": kind,
        "etag": etag,
        "nextPageToken": nextPageToken,
        "items": List<dynamic>.from(videos.map((x) => x.toJson())),
        "pageInfo": pageInfo.toJson(),
      };
}

class VideoItem {
  VideoItem({
    required this.kind,
    required this.etag,
    required this.id,
    required this.video,
  });
  String kind;
  String etag;
  String id;
  Video video;
  factory VideoItem.fromJson(Map<String, dynamic> json) => VideoItem(
        kind: json["kind"].toString(),
        etag: json["etag"].toString(),
        id: json["id"].toString(),
        video: Video.fromJson(json["snippet"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "kind": kind,
        "etag": etag,
        "id": id,
        "snippet": video.toJson(),
      };
}

class Video {
  Video({
    required this.publishedAt,
    required this.channelId,
    required this.title,
    required this.description,
    required this.thumbnails,
    required this.channelTitle,
    required this.playlistId,
    required this.position,
    required this.resourceId,
  });
  DateTime publishedAt;
  String channelId;
  String title;
  String description;
  Thumbnails thumbnails;
  String channelTitle;
  String playlistId;
  int position;
  ResourceId resourceId;
  factory Video.fromJson(Map<String, dynamic> json) => Video(
        publishedAt: DateTime.parse(json["publishedAt"].toString()),
        channelId: json["channelId"].toString(),
        title: json["title"].toString(),
        description: json["description"].toString(),
        thumbnails:
            Thumbnails.fromJson(json["thumbnails"] as Map<String, dynamic>),
        channelTitle: json["channelTitle"].toString(),
        playlistId: json["playlistId"].toString(),
        position: json["position"] as int,
        resourceId:
            ResourceId.fromJson(json["resourceId"] as Map<String, dynamic>),
      );
  Map<String, dynamic> toJson() => {
        "publishedAt": publishedAt.toIso8601String(),
        "channelId": channelId,
        "title": title,
        "description": description,
        "thumbnails": thumbnails.toJson(),
        "channelTitle": channelTitle,
        "playlistId": playlistId,
        "position": position,
        "resourceId": resourceId.toJson(),
      };
}

class ResourceId {
  ResourceId({
    required this.kind,
    required this.videoId,
  });
  String kind;
  String videoId;
  factory ResourceId.fromJson(Map<String, dynamic> json) => ResourceId(
        kind: json["kind"].toString(),
        videoId: json["videoId"].toString(),
      );
  Map<String, dynamic> toJson() => {
        "kind": kind,
        "videoId": videoId,
      };
}
