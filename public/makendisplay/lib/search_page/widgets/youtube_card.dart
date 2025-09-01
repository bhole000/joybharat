import 'package:das_nursery/youtube.dart';
import 'package:das_nursery/search_page/video_details.dart';
import 'package:das_nursery/search_page/widgets/youtube_content.dart';
import 'package:das_nursery/search_page/widgets/youtube_image.dart';
import 'package:das_nursery/search_page/widgets/youtube_title.dart';
import 'package:flutter/material.dart';

class YoutubeCardSmall extends StatelessWidget {
  final VideoItem post;
  const YoutubeCardSmall({Key? key, required this.post}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return GestureDetector(
      onTap: () {
        Navigator.of(context).push(
          PageRouteBuilder(
            pageBuilder: (
              BuildContext context,
              Animation<double> animation,
              Animation<double> secondaryAnimation,
            ) =>
                VideoDetails(post: post),
            transitionDuration: const Duration(milliseconds: 1000),
          ),
        );
      },
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: Colors.white12,
          borderRadius: BorderRadius.circular(15),
        ),
        width: size.width,
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(8),
              width: size.width - 170,
              height: 150,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  YoutubeTitle(title: post.video.title, id: post.id),
                  YoutubePostContent(content: post.video.description, id: post.id, width: size.width - 170),
                ],
              ),
            ),
            YoutubeImage(post: post),
          ],
        ),
      ),
    );
  }
}
