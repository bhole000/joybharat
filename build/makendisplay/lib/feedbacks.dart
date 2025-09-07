import 'dart:convert';
import 'dart:developer';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class DFeedback {
  DFeedback({
    required this.title,
    required this.details,
    required this.rating,
    required this.name,
  });
  late final String title;
  late final String details;
  late final int rating;
  late final String name;

  DFeedback.fromJson(Map<String, dynamic> json) {
    title = json['title']??"";
    details = json['details']??"";
    rating = json['rating']??4;
    name = json['name']??"";
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['title'] = title;
    _data['details'] = details;
    _data['rating'] = rating;
    _data['name'] = name;
    return _data;
  }
}

class Feedbacks extends StatefulWidget {
  const Feedbacks({Key? key}) : super(key: key);

  @override
  State<Feedbacks> createState() => _FeedbacksState();
}

class _FeedbacksState extends State<Feedbacks> {
  Future<List<DFeedback>> getFeedbacks() async {
    //final _feedbacks = await FirebaseDatabase.instance.ref('feedbacks').get();
    //final _feed = (jsonDecode(jsonEncode(_feedbacks.value)) as Map<String,dynamic>?) ?? {};
    try {
      //print(_feed.values);
      //final list = _feed.values.map((e) => DFeedback.fromJson(e)).toList();
      //print("DATA $list");
      return [];
    }catch(e){
      log("ERROR $e");
      return [];
    }
  }

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Feedbacks"),
      ),
      body: FutureBuilder<List<DFeedback>>(
        future: getFeedbacks(),
        builder: (context, snapshot) {
          if(snapshot.connectionState!=ConnectionState.waiting) {
            print(snapshot.data);
            if (snapshot.hasData) {
              return ListView.builder(
                itemCount: snapshot.data!.length,
                itemBuilder: (context, index) {
                  final feed = snapshot.data![index];
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: ListTile(
                      tileColor: Colors.white,
                      title: Text("${feed.name}\n${feed.title}"),
                      subtitle: Text("${feed.details}\nRatting : ${feed.rating}"),
                    ),
                  );
                },
              );
            }else{
              return const Center(child: Text("No Feedbacks yet !"));
            }
          }else{
            return const Center(child: CupertinoActivityIndicator());
          }
        },
      ),
    );
  }
}
