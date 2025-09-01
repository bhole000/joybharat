import 'dart:io';
import 'package:das_nursery/main.dart';
import 'package:das_nursery/main_windows.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'onb.dart';

class IntroPage extends StatefulWidget {
  const IntroPage({Key? key}) : super(key: key);

  @override
  State<IntroPage> createState() => _IntroPageState();
}

class _IntroPageState extends State<IntroPage> {
  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.white,
      child: OnBoardingScreen(
        onSkip: () {
          SharedPreferences.getInstance().then((value) => value.setBool('isFirst', true));
          Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context)=>(Platform.isWindows?const MainPageWindows():const MainPage())), (route) => false);
        },
        onDone: () {
          SharedPreferences.getInstance().then((value) => value.setBool('isFirst', true));
          Navigator.pushAndRemoveUntil(context, MaterialPageRoute(builder: (context)=>(Platform.isWindows?const MainPageWindows():const MainPage())), (route) => false);
        },
        showPrevNextButton: true,
        showIndicator: true,
        backgourndColor: Colors.white,
        activeDotColor: Colors.blue,
        deactiveDotColor: Colors.grey,
        iconColor: Colors.black,
        doneIcon: Icons.check_circle,
        leftIcon: Icons.arrow_circle_left_rounded,
        rightIcon: Icons.arrow_circle_right_rounded,
        iconSize: 30,
        pages: [
          OnBoardingModel(
            image: Image.asset("assets/s1.jpg"),
            title: "Checkout a new way of shopping online",
            body: "Finafid marketing brings a direct selling concept that empowers its members for a lifetime.",
          ),
          OnBoardingModel(
            image: Image.asset("assets/s2.jpg"),
            title: "Find Out thousands of products",
            body: "Choose between thousands products. Order your favourite products today",
          ),
          OnBoardingModel(
            image: Image.asset("assets/s3.jpg"),
            title: "Order now and share with your friends & Family",
            body: "Share and gift plants with your friends & family. And get exciting rewards",
          ),
        ],
      ),
    );
  }
}
