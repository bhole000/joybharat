
import 'package:das_nursery/apis.dart';
import 'package:das_nursery/search_page/widgets/youtube_card.dart';
import 'package:das_nursery/youtube.dart';
import 'package:flutter/material.dart';
import 'package:flutter_iconly/flutter_iconly.dart';
import 'package:shimmer/shimmer.dart';

class YoutubeWidget extends StatelessWidget {
  const YoutubeWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<VideosList>(
      future: Apis.getVideosList(
        playListId: "PLXaNv8_j0p1bUgSR-5BXdqqGJoaIOQaOb",
        pageToken: "",
      ),
      builder: (context, snapshot) {
        //if (false) {
        if (snapshot.connectionState != ConnectionState.waiting) {
          if (!snapshot.hasData) {
            return SizedBox(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(IconlyLight.play, size: 50, color: Colors.white38),
                  SizedBox(height: 10),
                  Text(
                    "No videos found !",
                    style: TextStyle(color: Colors.white38),
                  )
                ],
              ),
            );
          }
          if (snapshot.data!.videos.isEmpty) {
            return SizedBox(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Icon(IconlyLight.play, size: 50, color: Colors.white38),
                  SizedBox(height: 10),
                  Text(
                    "No videos found !",
                    style: TextStyle(color: Colors.white38),
                  )
                ],
              ),
            );
          }
          return ListView.builder(
            itemCount: snapshot.data!.videos.length,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            itemBuilder: (context, index) {
              return YoutubeCardSmall(post: snapshot.data!.videos[index]);
            },
          );
        } else {
          return Shimmer.fromColors(
            baseColor: Colors.white30,
            highlightColor: Colors.white54,
            child: ListView.builder(
              itemCount: 8,
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              itemBuilder: (context, index) {
                return const CircularProgressIndicator();
              },
            ),
          );
        }
      },
    );
  }
}
