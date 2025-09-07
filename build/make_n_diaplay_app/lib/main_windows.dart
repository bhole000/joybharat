import 'dart:async';
import 'dart:io';
import 'package:make_n_display/main.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:webview_windows/webview_windows.dart';

const mainColor = Color(0xFFF6A505);

class MainPageWindows extends StatefulWidget {
  const MainPageWindows({Key? key}) : super(key: key);

  @override
  State<MainPageWindows> createState() => _MainPageWindowsState();
}

class _MainPageWindowsState extends State<MainPageWindows> {
  final _controller = WebviewController();
  @override
  void initState() {
    super.initState();
    initPlatformState();
  }

  Future<void> initPlatformState() async {
    try {
      await _controller.initialize();
      await _controller.setBackgroundColor(Colors.transparent);
      await _controller.setPopupWindowPolicy(WebviewPopupWindowPolicy.deny);
      await _controller.loadUrl('https://makendisplay.in/');

      if (!mounted) return;
      setState(() {});
    } on PlatformException catch (e) {
      WidgetsBinding.instance.addPostFrameCallback(
        (_) {
          showDialog(
            context: context,
            builder: (_) => AlertDialog(
              title: const Text('Error'),
              content: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Code: ${e.code}'),
                  Text('Message: ${e.message}'),
                ],
              ),
              actions: [
                TextButton(
                  child: const Text('Continue'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                )
              ],
            ),
          );
        },
      );
    }
  }

  Widget compositeView() {
    if (!_controller.value.isInitialized) {
      return LoaderWidget();
    } else {
      return Stack(
        children: [
          Webview(
            _controller,
            permissionRequested: _onPermissionRequested,
          ),
          StreamBuilder<LoadingState>(
            stream: _controller.loadingState,
            builder: (context, snapshot) {
              if (snapshot.hasData && snapshot.data == LoadingState.loading) {
                return LoaderWidget();
              } else {
                return const SizedBox.shrink();
              }
            },
          ),
        ],
      );
    }
  }

  Widget LoaderWidget() {
    return Container(
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
              borderRadius: const BorderRadius.all(Radius.circular(10)),
              child: LinearProgressIndicator(
                value: loadingPercentage / 100.0,
                valueColor:
                    const AlwaysStoppedAnimation<Color>(Color(0xff00ff00)),
                backgroundColor: const Color(0xffD6D6D6),
              ),
            ),
          )
        ],
      ),
    );
  }

  Future<WebviewPermissionDecision> _onPermissionRequested(
      String url, WebviewPermissionKind kind, bool isUserInitiated) async {
    final decision = await showDialog<WebviewPermissionDecision>(
      context: navigatorKey.currentContext!,
      builder: (BuildContext context) => AlertDialog(
        title: const Text('WebView permission requested'),
        content: Text('WebView has requested permission \'$kind\''),
        actions: <Widget>[
          TextButton(
            onPressed: () =>
                Navigator.pop(context, WebviewPermissionDecision.deny),
            child: const Text('Deny'),
          ),
          TextButton(
            onPressed: () =>
                Navigator.pop(context, WebviewPermissionDecision.allow),
            child: const Text('Allow'),
          ),
        ],
      ),
    );
    return decision ?? WebviewPermissionDecision.none;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: WillPopScope(
          onWillPop: () => exitApp(context),
          child: compositeView(),
        ),
      ),
    );
  }

  var loadingPercentage = 0;
  Future<bool> exitApp(BuildContext context) async {
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
              onPressed: () => Navigator.pop(context),
            ),
          ],
        );
      },
    );
    return Future.value(false);
  }
}
