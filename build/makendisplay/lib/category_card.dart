import 'dart:io';

import 'package:das_nursery/main.dart';
import 'package:das_nursery/main_windows.dart';
import 'package:das_nursery/model.dart';
import 'package:flutter/material.dart';

class CategoryCard extends StatelessWidget {
  final StoreItems category;
  const CategoryCard({Key? key, required this.category}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap:(){
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => Platform.isWindows
                ? const MainPageWindows()
                : const MainPage(),
          ),
        );
      },
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 5.0,vertical: 10.0),
        child: AspectRatio(
          aspectRatio: 1,
          child: Stack(
            alignment: Alignment.bottomCenter,
            children: [
              Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  image: DecorationImage(
                    image: NetworkImage(category.items.first.imageUrl),
                    fit: BoxFit.cover,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey.shade200,
                      blurRadius: 4.0,
                      spreadRadius: 4.0,
                    ),
                  ],
                ),
              ),
              Container(
                height: 80,
                width: Size.infinite.width,
                alignment: Alignment.bottomCenter,
                padding: const EdgeInsets.only(bottom: 10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(15),
                  gradient: const LinearGradient(
                      begin: Alignment.bottomCenter,
                      end: Alignment.topCenter,
                      colors: [
                        Colors.white,
                        Colors.white54,
                        Colors.white10,
                      ]),
                ),
                child: Text(
                  category.category.name,
                  style: const TextStyle(fontWeight: FontWeight.bold),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
