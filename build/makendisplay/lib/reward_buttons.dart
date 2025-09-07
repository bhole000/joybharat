import 'dart:io';
import 'package:das_nursery/main.dart';
import 'package:das_nursery/main_windows.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class RewardButtons extends StatelessWidget {
  const RewardButtons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        TapNFlatbutton(
          onTap: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) =>
                Platform.isWindows ? const MainPageWindows() : const MainPage(),
              ),
            );
          },
          fillColor: Colors.deepPurple,
          icon: Icons.store,
        ),
        const SizedBox(
          width: 18,
        ),
        TapNFlatbutton(
          onTap: () {
            launchUrl(Uri.parse("tel:+919748521506"));
          },
          fillColor: Colors.deepPurple,
          icon: Icons.phone,
        ),
        const SizedBox(
          width: 18,
        ),
        TapNFlatbutton(
          onTap: () {
            launchUrl(Uri.parse("https://wa.me/9748521506?text=Hello"));
          },
          fillColor: Colors.deepPurple,
          icon: Icons.chat_outlined,
        ),
      ],
    );
  }
}

class TapNFlatbutton extends StatelessWidget {
  final IconData icon;
  final Color fillColor;
  final Function() onTap;
  final bool isActive;
  const TapNFlatbutton({
    Key? key,
    required this.icon,
    required this.fillColor,
    required this.onTap,
    this.isActive = false,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      elevation: 0,
      constraints: const BoxConstraints(
        maxHeight: 80,
        maxWidth: 80,
        minHeight: 80,
        minWidth: 80,
      ),
      onPressed: onTap,
      fillColor: isActive ? fillColor : Colors.grey.shade100,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(15),
      ),
      child: Icon(
        icon,
        color: isActive ? Colors.white : Colors.deepPurple,
        size: 30,
      ),
    );
  }
}
