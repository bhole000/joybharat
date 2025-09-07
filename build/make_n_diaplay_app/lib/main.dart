// ignore_for_file: use_build_context_synchronously

import 'dart:async';
import 'dart:io';
import 'package:make_n_display/intro_page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
import 'package:make_n_display/main_windows.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:webview_flutter/webview_flutter.dart';

const mainColor = Color(0xFFF6A505);
final navigatorKey = GlobalKey<NavigatorState>();

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final pref = await SharedPreferences.getInstance();
  final isFirst = pref.getBool('isFirst') ?? false;
  runApp(
    MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Make & Display',
      navigatorKey: navigatorKey,
      theme: ThemeData(
        primarySwatch: Colors.brown,
      ),
      home: isFirst
          ? (Platform.isWindows ? const MainPageWindows() : const MainPage())
          : const IntroPage(),
    ),
  );
}

class MainPage extends StatefulWidget {
  const MainPage({Key? key}) : super(key: key);

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  final controller = Completer<WebViewController>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: WillPopScope(
          onWillPop: () => exitApp(context),
            child: IndexedStack(
            alignment: Alignment.center,
            index: (loadingPercentage < 100)?1:0,
            children: [
              WebView(
                initialUrl: 'https://makendisplay.in/',
                onWebViewCreated: (webViewController) {
                  controller.complete(webViewController);
                },
                onPageStarted: (url) {
                  setState(() {
                    loadingPercentage = 0;
                  });
                },
                onProgress: (progress) {
                  setState(() {
                    loadingPercentage = progress;
                  });
                },
                onPageFinished: (url) {
                  setState(() {
                    loadingPercentage = 100;
                  });
                },
                navigationDelegate: (navigation) async {
                  await launch(
                    navigation.url,
                    customTabsOption: CustomTabsOption(
                      toolbarColor: Theme.of(context).primaryColor,
                      enableDefaultShare: true,
                      enableUrlBarHiding: true,
                      showPageTitle: true,
                      animation: CustomTabsSystemAnimation.slideIn(),
                      extraCustomTabs: const <String>[
                        'org.mozilla.firefox',
                        'com.microsoft.emmx',
                      ],
                    ),
                    safariVCOption: SafariViewControllerOption(
                      preferredBarTintColor: Theme.of(context).primaryColor,
                      preferredControlTintColor: Colors.white,
                      barCollapsingEnabled: true,
                      entersReaderIfAvailable: false,
                      dismissButtonStyle:
                          SafariViewControllerDismissButtonStyle.close,
                    ),
                  );
                  return NavigationDecision.navigate;
                },
                javascriptMode: JavascriptMode.unrestricted,
                javascriptChannels: _createJavascriptChannels(context),
              ),
              Container(
                  color: Colors.white,
                  height: MediaQuery.of(context).size.height,
                  width: MediaQuery.of(context).size.width,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      Image.asset('assets/loading.gif'),
                      SizedBox(
                        width: MediaQuery.of(context).size.width - 200,
                        height: 5,
                        child: ClipRRect(
                          borderRadius:
                              const BorderRadius.all(Radius.circular(10)),
                          child: LinearProgressIndicator(
                            value: loadingPercentage / 100.0,
                            valueColor: const AlwaysStoppedAnimation<Color>(
                                Colors.brown),
                            backgroundColor: const Color(0xffD6D6D6),
                          ),
                        ),
                      )
                    ],
                  ),
                )
            ],
          ),
        ),
      ),
    );
  }

  var loadingPercentage = 0;
  Future<bool> exitApp(BuildContext context) async {
    final cont = await controller.future;
    if (await cont.canGoBack()) {
      await cont.goBack();
    } else {
      showCupertinoDialog(
          context: context,
          builder: (context) {
            return CupertinoAlertDialog(
              title: const Text("Exit App ?"),
              actions: [
                CupertinoButton(
                    child: const Text("Exit"), onPressed: () => exit(0)),
                CupertinoButton(
                    child: const Text("Cancel"),
                    onPressed: () => Navigator.pop(context)),
              ],
            );
          });
    }
    return Future.value(false);
  }

  Set<JavascriptChannel> _createJavascriptChannels(BuildContext context) {
    return {
      JavascriptChannel(
        name: 'SnackBar',
        onMessageReceived: (message) {
          ScaffoldMessenger.of(context)
              .showSnackBar(SnackBar(content: Text(message.message)));
        },
      ),
    };
  }
}
