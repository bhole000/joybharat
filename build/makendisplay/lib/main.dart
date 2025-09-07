import 'dart:async';
import 'dart:io';
import 'package:das_nursery/intro_page.dart';
import 'package:das_nursery/main_windows.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_custom_tabs/flutter_custom_tabs.dart';
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
      title: 'Das Nursery',
      navigatorKey: navigatorKey,
      theme: ThemeData(
        primarySwatch: Colors.amber,
      ),
      home:
      isFirst
        // ? const HomePage()
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
      body: RefreshIndicator(
        onRefresh: ()async{
          final ctr = await controller.future;
          await ctr.reload();
        },
        child: SafeArea(
          child: WillPopScope(
            onWillPop: () => exitApp(context),
            child: Stack(
              children: [
                WebView(
                  initialUrl: 'https://finafid.com/',
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
                if (loadingPercentage < 100)
                  Container(
                    color: Colors.white,
                    height: MediaQuery.of(context).size.height,
                    width: MediaQuery.of(context).size.width,
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Image.asset('assets/loading.gif'),
                        Container(
                          margin: const EdgeInsets.symmetric(vertical: 20),
                          width: MediaQuery.of(context).size.width - 60,
                          height: 20,
                          child: ClipRRect(
                            borderRadius:
                                const BorderRadius.all(Radius.circular(10)),
                            child: LinearProgressIndicator(
                              value: loadingPercentage / 100.0,
                              valueColor: const AlwaysStoppedAnimation<Color>(
                                  Color(0xff00ff00)),
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
