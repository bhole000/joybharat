import 'package:flutter/material.dart';

class YoutubeTitle extends StatelessWidget {
  final String title;
  final String id;
  final bool fromDetails;
  const YoutubeTitle({Key? key, required this.title, required this.id, this.fromDetails = false})
      : super(key: key);

  @override
  Widget build(BuildContext context) => Hero(
        tag: "post_title$id",
        transitionOnUserGestures: true,
        child: Material(
          color: Colors.transparent,
          child: Text(
            title,
            maxLines: fromDetails?10:2,
            style: const TextStyle(
              overflow: TextOverflow.ellipsis,
              fontSize: 14,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
      );
}
