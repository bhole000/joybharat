import 'package:das_nursery/youtube.dart';
import 'package:das_nursery/apis.dart';
import 'package:das_nursery/search_page/widgets/youtube_card.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({Key? key}) : super(key: key);

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  ChannelInfo channelInfo = ChannelInfo(
    kind: "",
    etag: "",
    pageInfo: PageInfo(resultsPerPage: 0),
    items: [],
  );
  VideosList videosList = VideosList(
    kind: "",
    etag: "",
    nextPageToken: "",
    videos: [],
    pageInfo: PageInfo(resultsPerPage: 0),
  );
  Item item = Item(
    kind: "",
    etag: "",
    id: "",
    snippet: Snippet(
      title: "title",
      description: "description",
      publishedAt: DateTime.now(),
      thumbnails: Thumbnails(
        thumbnailsDefault: Default(url: "url", width: 10, height: 10),
        medium: Default(url: "url", width: 10, height: 10),
        high: Default(url: "url", width: 10, height: 10),
      ),
      localized: Localized(
        title: "title",
        description: "description",
      ),
      country: "country",
    ),
    contentDetails: ContentDetails(
      relatedPlaylists: RelatedPlaylists(
        favorites: '',
        likes: '',
        watchLater: '',
        uploads: '',
        watchHistory: '',
      ),
    ),
    statistics: Statistics(
      viewCount: "",
      commentCount: "",
      subscriberCount: "",
      hiddenSubscriberCount: true,
      videoCount: "",
    ),
  );
  bool _loading = false;
  String _playListId = "";
  String _nextPageToken = "";
  late ScrollController _scrollController;
  final searchController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _loading = true;
    _nextPageToken = '';
    _scrollController = ScrollController();
    getChannelInfo();
  }

  Future getChannelInfo() async {
    channelInfo = await Apis.getChannelInfo();
    item = channelInfo.items[0];
    _playListId = item.contentDetails.relatedPlaylists.uploads;
    print('_playListId $_playListId');
    await loadVideos();
    setState(() {
      _loading = false;
    });
  }

  Future loadVideos() async {
    final VideosList tempVideosList = await Apis.getVideosList(
      playListId: _playListId,
      pageToken: _nextPageToken,
    );
    _nextPageToken = tempVideosList.nextPageToken;
    videosList.videos.addAll(tempVideosList.videos);
    if (kDebugMode) {
      print('videos: ${videosList.videos.length}');
      print('_nextPageToken $_nextPageToken');
    }
    setState(() {});
  }

  Future searchVideos() async {
    final VideosList tempVideosList = await Apis.searchVideos(
      playListId: _playListId,
      pageToken: _nextPageToken,
      query: searchController.text,
    );
    _nextPageToken = tempVideosList.nextPageToken;
    videosList.videos.addAll(tempVideosList.videos);
    if (kDebugMode) {
      print('videos: ${videosList.videos.length}');
      print('_nextPageToken $_nextPageToken');
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        _buildInfoView(),
        Padding(
          padding: const EdgeInsets.all(12.0),
          child: CupertinoSearchTextField(
            controller: searchController,
            style: const TextStyle(color: Colors.white),
            onSubmitted: (v) {
              if (v.isNotEmpty) {
                videosList.videos.clear();
                searchVideos();
              }
            },
            onSuffixTap: () {
              videosList.videos.clear();
              loadVideos();
            },
          ),
        ),
        Expanded(
          child: NotificationListener<ScrollEndNotification>(
            onNotification: (ScrollNotification notification) {
              if (videosList.videos.length >=
                  int.parse(item.statistics.videoCount)) {
                return true;
              }
              if (notification.metrics.pixels ==
                  notification.metrics.maxScrollExtent) {
                if (searchController.text.isEmpty) {
                  loadVideos();
                } else {
                  searchVideos();
                }
              }
              return true;
            },
            child: ListView.builder(
              controller: _scrollController,
              itemCount: videosList.videos.length,
              itemBuilder: (context, index) {
                return YoutubeCardSmall(post: videosList.videos[index]);
              },
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildInfoView() {
    if (_loading) {
      return const CircularProgressIndicator();
    } else {
      return GestureDetector(
        onTap: (){
          launchUrl(Uri.parse("https://www.youtube.com/c/ASTROLOGERVEDACHARYA-SAMRATCHAKRABORTY"));
        },
        child: Container(
          height: 100,
          margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: BoxDecoration(
            color: Colors.white12,
            borderRadius: BorderRadius.circular(15),
          ),
          width: MediaQuery.of(context).size.width,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                height: 100,
                width: 100,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(item.snippet.thumbnails.medium.url),
                    fit: BoxFit.cover,
                  ),
                  borderRadius: const BorderRadius.only(
                    topLeft: Radius.circular(15),
                    bottomLeft: Radius.circular(15),
                  ),
                ),
              ),
              Container(
                width: MediaQuery.of(context).size.width - 120,
                padding: const EdgeInsets.all(10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      item.snippet.title,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "${item.statistics.videoCount}+ videos",
                          style: const TextStyle(
                            overflow: TextOverflow.ellipsis,
                            fontSize: 14,
                            fontWeight: FontWeight.normal,
                          ),
                        ),
                        const Card(
                          color: Colors.red,
                          child: Padding(
                            padding: EdgeInsets.all(4.0),
                            child: Text(
                              " Subscribe ",
                              style: TextStyle(
                                overflow: TextOverflow.ellipsis,
                                fontSize: 14,
                                fontWeight: FontWeight.normal,
                              ),
                            ),
                          ),
                        )
                      ],
                    ),
                  ],
                ),
              )
            ],
          ),
        ),
      );
    }
  }
}
