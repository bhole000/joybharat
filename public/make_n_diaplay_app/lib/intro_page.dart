import 'dart:io';
import 'package:make_n_display/main.dart';
import 'package:make_n_display/main_windows.dart';
import 'package:flutter/material.dart';
import 'package:make_n_display/onb.dart';
import 'package:shared_preferences/shared_preferences.dart';

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
        fullScreenImage: true,
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
            image: Image.asset("assets/s1.png",fit: BoxFit.cover,),
            title: "Create a green town in your house with Dah Nursery",
            body: "Plants keep your clam, relax. Contribute more to our environment by planting more and more trees",
          ),
          OnBoardingModel(
            image: Image.asset("assets/s2.png",fit: BoxFit.cover,),
            title: "Find Out thousands of plant spaces",
            body: "Choose between thousands plant spaces. Order your favourite plant today",
          ),
          OnBoardingModel(
            image: Image.asset("assets/s3.png",fit: BoxFit.cover,),
            title: "Order now and share with your friends & Family",
            body: "Share and gift plants with your friends & family. And get exciting rewards",
          ),
        ],
      ),
    );
  }
}
