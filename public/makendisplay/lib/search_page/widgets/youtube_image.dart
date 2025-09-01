import 'package:das_nursery/youtube.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:youtube_player_flutter/youtube_player_flutter.dart';

class YoutubeImage extends StatelessWidget {
  final VideoItem post;
  final bool fromDetails;
  final YoutubePlayerController? controller;
  final ValueChanged<bool>? onReady;
  const YoutubeImage(
      {Key? key,
      required this.post,
      this.fromDetails = false,
      this.controller,
      this.onReady})
      : super(key: key);

  @override
  Widget build(BuildContext context) => Hero(
        tag: "youtube_image${post.id}",
        transitionOnUserGestures: true,
        child: fromDetails
            ? YoutubePlayer(
                controller: controller!,
                showVideoProgressIndicator: true,
                onReady: () {
                  onReady!(true);
                },
              )
            : Container(
                height: fromDetails ? 250 : 150,
                width: 150,
                decoration: BoxDecoration(
                  image: DecorationImage(
                    image: NetworkImage(post.video.thumbnails.medium.url),
                    fit: BoxFit.cover,
                  ),
                  borderRadius: fromDetails
                      ? BorderRadius.circular(15)
                      : const BorderRadius.only(
                          topRight: Radius.circular(15),
                          bottomRight: Radius.circular(15),
                        ),
                ),
              ),
      );
}
