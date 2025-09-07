import 'package:flutter/material.dart';

class YoutubePostContent extends StatelessWidget {
  final String content;
  final String id;
  final double width;
  final bool fromDetails;
  const YoutubePostContent({Key? key, required this.content, required this.id, required this.width,this.fromDetails = false})
      : super(key: key);

  @override
  Widget build(BuildContext context) => Hero(
        tag: "youtube_content$id",
        transitionOnUserGestures: true,
        child: Material(
          color: Colors.transparent,
          child: Container(
            padding: const EdgeInsets.only(left: 3),
            width: width,
            child: Text(
              content,
              maxLines: fromDetails ? null : 3,
              style: TextStyle(overflow: fromDetails ? null : TextOverflow.ellipsis),
            ),
          ),
        ),
      );
}
