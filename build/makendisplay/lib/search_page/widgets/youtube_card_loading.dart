import 'package:flutter/material.dart';

class YoutubeCardLoading extends StatelessWidget {
  const YoutubeCardLoading({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: Colors.white54,
        borderRadius: BorderRadius.circular(15),
      ),
      width: MediaQuery.of(context).size.width,
      child: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(8),
            width: MediaQuery.of(context).size.width - 170,
            height: 150,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  height: 25,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    color: Colors.white60,
                  ),
                ),
                const SizedBox(height: 6),
                // ignore: unused_local_variable
                for (final e in List.generate(6, (index) => null)) ...[
                  Container(
                    height: 12,
                    margin: const EdgeInsets.only(top: 4),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5),
                      color: Colors.white60,
                    ),
                  )
                ],
              ],
            ),
          ),
          Container(
            height: 150,
            width: 150,
            decoration: const BoxDecoration(
              color: Colors.white60,
              borderRadius: BorderRadius.only(
                topRight: Radius.circular(15),
                bottomRight: Radius.circular(15),
              ),
            ),
          )
        ],
      ),
    );
  }
}
