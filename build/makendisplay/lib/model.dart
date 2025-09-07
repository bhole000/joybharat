class AutoGenerate {
  AutoGenerate({
    required this.status,
    required this.message,
    required this.storeItems,
    required this.tagsItems,
  });
  late final bool status;
  late final String message;
  late final List<StoreItems> storeItems;
  late final List<dynamic> tagsItems;

  AutoGenerate.fromJson(Map<String, dynamic> json) {
    status = json['status'];
    message = json['message'];
    storeItems = List.from(json['store_items'])
        .map((e) => StoreItems.fromJson(e))
        .toList();
    tagsItems = List.castFrom<dynamic, dynamic>(json['tags_items']);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['status'] = status;
    _data['message'] = message;
    _data['store_items'] = storeItems.map((e) => e.toJson()).toList();
    _data['tags_items'] = tagsItems;
    return _data;
  }
}

class StoreItems {
  StoreItems({
    required this.category,
    required this.items,
  });
  late final Category category;
  late final List<Items> items;

  StoreItems.fromJson(Map<String, dynamic> json) {
    category = Category.fromJson(json['category']);
    items = List.from(json['items']).map((e) => Items.fromJson(e)).toList();
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['category'] = category.toJson();
    _data['items'] = items.map((e) => e.toJson()).toList();
    return _data;
  }
}

class Category {
  Category({
    required this.id,
    required this.name,
    required this.masterSubCategory,
    required this.imageUrl,
    required this.activeProducts,
    required this.selectedProducts,
    required this.fullCategory,
    this.productsConfig,
  });
  late final int id;
  late final String name;
  late final int masterSubCategory;
  late final String imageUrl;
  late final int activeProducts;
  late final int selectedProducts;
  late final bool fullCategory;
  late final Null productsConfig;

  Category.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    name = json['name'];
    masterSubCategory = json['master_sub_category'];
    imageUrl = json['image_url'];
    activeProducts = json['active_products'];
    selectedProducts = json['selected_products'];
    fullCategory = json['full_category'];
    productsConfig = null;
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['id'] = id;
    _data['name'] = name;
    _data['master_sub_category'] = masterSubCategory;
    _data['image_url'] = imageUrl;
    _data['active_products'] = activeProducts;
    _data['selected_products'] = selectedProducts;
    _data['full_category'] = fullCategory;
    _data['products_config'] = productsConfig;
    return _data;
  }
}

class Items {
  Items({
    required this.id,
    required this.storeId,
    required this.name,
    required this.price,
    required this.category,
    required this.imageUrl,
    required this.thumbnailUrl,
    this.images,
    required this.available,
    required this.description,
    this.descriptionDetail,
    required this.discountedPrice,
    required this.hasImages,
    required this.variants,
    required this.variantsCount,
    required this.tags,
    required this.lowQuantity,
    required this.availableQuantity,
    required this.managedInventory,
    required this.masterItemId,
    required this.isActive,
    required this.collections,
    required this.tax,
  });
  late final int id;
  late final int storeId;
  late final String name;
  late final int price;
  late final Category category;
  late final String imageUrl;
  late final String thumbnailUrl;
  late final Null images;
  late final int available;
  late final String description;
  late final String? descriptionDetail;
  late final int discountedPrice;
  late final int hasImages;
  late final List<dynamic> variants;
  late final int variantsCount;
  late final List<dynamic> tags;
  late final int lowQuantity;
  late final int availableQuantity;
  late final int managedInventory;
  late final int masterItemId;
  late final int isActive;
  late final List<dynamic> collections;
  late final Tax tax;

  Items.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    storeId = json['store_id'];
    name = json['name'];
    price = json['price'];
    category = Category.fromJson(json['category']);
    imageUrl = json['image_url'];
    thumbnailUrl = json['thumbnail_url'];
    images = null;
    available = json['available'];
    description = json['description'];
    descriptionDetail = null;
    discountedPrice = json['discounted_price'];
    hasImages = json['has_images'];
    variants = List.castFrom<dynamic, dynamic>(json['variants']);
    variantsCount = json['variants_count'];
    tags = List.castFrom<dynamic, dynamic>(json['tags']);
    lowQuantity = json['low_quantity'];
    availableQuantity = json['available_quantity'];
    managedInventory = json['managed_inventory'];
    masterItemId = json['master_item_id'];
    isActive = json['is_active'];
    collections = List.castFrom<dynamic, dynamic>(json['collections']);
    tax = Tax.fromJson(json['tax']);
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['id'] = id;
    _data['store_id'] = storeId;
    _data['name'] = name;
    _data['price'] = price;
    _data['category'] = category.toJson();
    _data['image_url'] = imageUrl;
    _data['thumbnail_url'] = thumbnailUrl;
    _data['images'] = images;
    _data['available'] = available;
    _data['description'] = description;
    _data['description_detail'] = descriptionDetail;
    _data['discounted_price'] = discountedPrice;
    _data['has_images'] = hasImages;
    _data['variants'] = variants;
    _data['variants_count'] = variantsCount;
    _data['tags'] = tags;
    _data['low_quantity'] = lowQuantity;
    _data['available_quantity'] = availableQuantity;
    _data['managed_inventory'] = managedInventory;
    _data['master_item_id'] = masterItemId;
    _data['is_active'] = isActive;
    _data['collections'] = collections;
    _data['tax'] = tax.toJson();
    return _data;
  }
}

class Tax {
  Tax({
    required this.id,
    required this.hsnSacCode,
    required this.gst,
  });
  late final int id;
  late final String hsnSacCode;
  late final int gst;

  Tax.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    hsnSacCode = json['hsn_sac_code'];
    gst = json['gst'];
  }

  Map<String, dynamic> toJson() {
    final _data = <String, dynamic>{};
    _data['id'] = id;
    _data['hsn_sac_code'] = hsnSacCode;
    _data['gst'] = gst;
    return _data;
  }
}

final categoryData = {
  "status": true,
  "message": "success",
  "store_items": [
    {
      "category": {
        "id": 5549224,
        "name": "Flower plant",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 27869767,
          "store_id": 7624273,
          "name": "Rose",
          "price": 150,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/VUpjfBzz.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/cpuOsv85.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. Delivery charge is sent to your bill at whatsapp",
          "description_detail": "",
          "discounted_price": 140,
          "has_images": 1,
          "variants": [],
          "variants_count": 10,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27882572,
          "store_id": 7624273,
          "name": "Bell flower ( Arabian Jasmin )",
          "price": 75,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/lkpHtIK9.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/VqnfOYDl.webp",
          "images": null,
          "available": 1,
          "description":
              "Deliver charge exclude of rate. It will send with the bill to your whatsapp number",
          "description_detail": "",
          "discounted_price": 75,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27946181,
          "store_id": 7624273,
          "name": "Anthorium ( large)",
          "price": 470,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/x3XBVBcM.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/6m6ou4yb.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It is send to your whatsapp number with the bill.",
          "description_detail": null,
          "discounted_price": 470,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27946229,
          "store_id": 7624273,
          "name": "Adenium",
          "price": 200,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/dEvexm6Q.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/CEyTdic7.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill.",
          "description_detail": null,
          "discounted_price": 200,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27946264,
          "store_id": 7624273,
          "name": "Monestaria",
          "price": 180,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/qZgmkrJB.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/BhJ6VOHR.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It is send to your whatsapp number with the bill.",
          "description_detail": null,
          "discounted_price": 180,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28004107,
          "store_id": 7624273,
          "name": "Chaina rose (jaba)",
          "price": 100,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/IbxJDpGx.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/ZtBtuEZu.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the total  bill.\n\nchose the varity and mention your colour at order instruction in the time of place your order.",
          "description_detail": "",
          "discounted_price": 95,
          "has_images": 4,
          "variants": [],
          "variants_count": 7,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28011232,
          "store_id": 7624273,
          "name": "Azelia",
          "price": 160,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/g5U0GKzP.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/rM1zVZPD.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery rate is not include with the rate. It will send to your whatsapp number.\n\nexcept these if you want another collour then chose the normal varity and mention your colour at order instruction in the time of place your order.",
          "description_detail": "",
          "discounted_price": 155,
          "has_images": 3,
          "variants": [],
          "variants_count": 6,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28169973,
          "store_id": 7624273,
          "name": "Alamunda",
          "price": 100,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/lSToxEXT.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/10kgqAuy.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 95,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28170004,
          "store_id": 7624273,
          "name": "Baganvalia",
          "price": 97,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/rTHM0OjG.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/dlURELD9.webp",
          "images": null,
          "available": 1,
          "description":
              "We can buy all kinds of plastic and mud tubs from rupees 50-350 and compost from 90-300",
          "description_detail": null,
          "discounted_price": 97,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28170037,
          "store_id": 7624273,
          "name": "Malati lalta",
          "price": 90,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/Uc7jadCb.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/P5D1v2cX.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 90,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29021298,
          "store_id": 7624273,
          "name": "Marie Gold",
          "price": 130,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/yluBlQUD.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/QUHoyAry.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your total bill to your WhatsApp number.",
          "description_detail": "",
          "discounted_price": 120,
          "has_images": 18,
          "variants": [],
          "variants_count": 15,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29021357,
          "store_id": 7624273,
          "name": "Pitunia",
          "price": 70,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/gZ17zjrH.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/vaazjjNZ.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the bill",
          "description_detail": "",
          "discounted_price": 65,
          "has_images": 4,
          "variants": [],
          "variants_count": 10,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29021798,
          "store_id": 7624273,
          "name": "Chandramallika",
          "price": 80,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/BUp3dFun.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/5gxORKDf.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 60,
          "has_images": 2,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29022025,
          "store_id": 7624273,
          "name": "Seasonal Flower Plant Set 25 Pcs 1 Inch Pot",
          "price": 250,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/9wdXScps.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/B9H6vA4H.webp",
          "images": null,
          "available": 1,
          "description":
              "25 varity seosnal flower set .\n\ndelivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 200,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29022261,
          "store_id": 7624273,
          "name": "Dianthus 16pcs 1inch Pot",
          "price": 104,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/kdxjFgaP.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/hDyn7hsU.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 100,
          "has_images": 2,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29022275,
          "store_id": 7624273,
          "name": "Pansy 1 Inch Pot",
          "price": 130,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/er4c1Bzv.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/oojhY5cJ.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 125,
          "has_images": 3,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29030808,
          "store_id": 7624273,
          "name": "Rajani Gandha 16 Pcs 8 varities (Gladulus)",
          "price": 144,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/6CYH2Y0F.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/JmkugYNG.webp",
          "images": null,
          "available": 1,
          "description":
              "8 different varieties all varities 2 pcs will be sent\n\nDelivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 130,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29054929,
          "store_id": 7624273,
          "name": "Dalia 1 Inch Pot",
          "price": 125,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/bX7SYf5Y.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/n83urkvt.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 115,
          "has_images": 6,
          "variants": [],
          "variants_count": 5,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29055335,
          "store_id": 7624273,
          "name": "Dianthrus 1 Inch 20 Pcs (Mix Colour)",
          "price": 160,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/5IoS1MM0.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/545BXtTy.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 150,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29055419,
          "store_id": 7624273,
          "name": "Gazenia 10 Pcs 1 Inch Pot (Mix Colour)",
          "price": 80,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/eQIY9lOF.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/aMw7Ux9g.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 75,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29055439,
          "store_id": 7624273,
          "name": "Phlox 10 Pcs 1 Inch Pot (Mix Colour)",
          "price": 90,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/1kEZA8mz.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/bzPupvPc.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 85,
          "has_images": 2,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29055477,
          "store_id": 7624273,
          "name": "Stocks 10 Pcs 1 Inch Pot (Mix Colour)",
          "price": 80,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/gpb1DYw6.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/5HjOpOqo.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 78,
          "has_images": 2,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27946166,
          "store_id": 7624273,
          "name": "Piece lili",
          "price": 300,
          "category": {
            "id": 5549224,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/XxyVLfp7.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/ggPZlCz2.webp",
          "images": null,
          "available": 0,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill.",
          "description_detail": null,
          "discounted_price": 300,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    },
    {
      "category": {
        "id": 5549337,
        "name": "Plant",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 27870442,
          "store_id": 7624273,
          "name": "Money  plant",
          "price": 80,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/HxDNklCn.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/MU9GegJU.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. Delivery charge will send with the bill to your whatsapp ",
          "description_detail": null,
          "discounted_price": 80,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27870577,
          "store_id": 7624273,
          "name": "Orcid ( Dandrobium )",
          "price": 400,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/dGhoFZdY.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/IK65nWWD.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. Delivery charge is sent to your bill at your whatsapp number",
          "description_detail": "",
          "discounted_price": 370,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28003968,
          "store_id": 7624273,
          "name": "Table kamini",
          "price": 140,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/mT9CdY9U.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/jXQGbjnE.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery  charge is not include  with the rate. It will send to your whatsapp number with the total bill",
          "description_detail": null,
          "discounted_price": 130,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28003995,
          "store_id": 7624273,
          "name": "Snake plant",
          "price": 120,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/nQxBTW89.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/X1oOudMd.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill.",
          "description_detail": null,
          "discounted_price": 115,
          "has_images": 1,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28011284,
          "store_id": 7624273,
          "name": "Lemon pine",
          "price": 200,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/9m19CheL.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/75pvTKeW.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill. ",
          "description_detail": null,
          "discounted_price": 195,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28170019,
          "store_id": 7624273,
          "name": "Cactus",
          "price": 150,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/mGBI38HB.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/1pjKcQtN.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": "",
          "discounted_price": 150,
          "has_images": 1,
          "variants": [],
          "variants_count": 3,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28178555,
          "store_id": 7624273,
          "name": "Arabicum",
          "price": 11000,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/amm81X0B.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/007Fnbiu.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": "",
          "discounted_price": 10500,
          "has_images": 1,
          "variants": [],
          "variants_count": 3,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28490922,
          "store_id": 7624273,
          "name": "Sandal plant",
          "price": 60,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/wjZemCuQ.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/nQQXsLfq.webp",
          "images": null,
          "available": 1,
          "description":
              "The delivery charge is not include with the rate. It is sent to your total bill",
          "description_detail": null,
          "discounted_price": 60,
          "has_images": 2,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 27889110,
          "store_id": 7624273,
          "name": "Broken heart",
          "price": 410,
          "category": {
            "id": 5549337,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/kssw4IlG.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/1NJMp8je.webp",
          "images": null,
          "available": 0,
          "description":
              "Delivery charge is not include the rate. Delivery charge will send with the bill to your whatsapp number. ",
          "description_detail": null,
          "discounted_price": 400,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    },
    {
      "category": {
        "id": 5550703,
        "name": "Indoor plant",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 27882540,
          "store_id": 7624273,
          "name": "Lucky Bamboo",
          "price": 220,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/lVoOhu3e.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/KgqhLrE6.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. Delivery charge will send to your bill to your whatsapp.",
          "description_detail": "",
          "discounted_price": 210,
          "has_images": 4,
          "variants": [],
          "variants_count": 4,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28011716,
          "store_id": 7624273,
          "name": "Hoya small",
          "price": 380,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/Q5XNPCUg.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/6LUL7bZf.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send you to your whatsapp number with the bill.",
          "description_detail": "",
          "discounted_price": 350,
          "has_images": 2,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28577471,
          "store_id": 7624273,
          "name": "ZZ Plant ( Zamia )",
          "price": 305,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/DnwJSFpt.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/LpMfHcHC.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate, it is send with the total bill to your WhatsApp number",
          "description_detail": "",
          "discounted_price": 300,
          "has_images": 4,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28577578,
          "store_id": 7624273,
          "name": "Caladium",
          "price": 300,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/n6lRm8vK.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/AVNeOp6S.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate, it will send with the total bill to your WhatsApp number.",
          "description_detail": "",
          "discounted_price": 300,
          "has_images": 4,
          "variants": [],
          "variants_count": 3,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28577615,
          "store_id": 7624273,
          "name": "Bonsai",
          "price": 400,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/FRVxMaRr.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/sxIuJdiX.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate, it will send with the total bill to your WhatsApp number",
          "description_detail": null,
          "discounted_price": 390,
          "has_images": 1,
          "variants": [],
          "variants_count": 3,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28824084,
          "store_id": 7624273,
          "name": "Birkin Plant",
          "price": 400,
          "category": {
            "id": 5550703,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/O0joPSqG.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/24Px4Z67.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be send to your total bill to your WhatsApp.",
          "description_detail": "",
          "discounted_price": 400,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    },
    {
      "category": {
        "id": 5565573,
        "name": "Compost",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 28005719,
          "store_id": 7624273,
          "name": "Varmi compose",
          "price": 50,
          "category": {
            "id": 5565573,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/LWk6jHZD.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/rRY4xG5A.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill. ",
          "description_detail": null,
          "discounted_price": 37,
          "has_images": 1,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    },
    {
      "category": {
        "id": 5566192,
        "name": "Fruit plant",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 28011334,
          "store_id": 7624273,
          "name": "Papaya plant 20pcs",
          "price": 160,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/PZ8Xh7hm.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/uAo2JaTf.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the rate. It will send to your whatsapp number with the bill. ",
          "description_detail": null,
          "discounted_price": 150,
          "has_images": 1,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28169980,
          "store_id": 7624273,
          "name": "Pink jack fruit",
          "price": 110,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/H15Nzci6.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/cUOl6Y9x.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 105,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28169986,
          "store_id": 7624273,
          "name": "Dumur",
          "price": 200,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/B5OthLO3.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/aePlc1AJ.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 200,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28169992,
          "store_id": 7624273,
          "name": "Red imli",
          "price": 200,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/NufZF3Yl.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/YiAwtqHW.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 200,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28169996,
          "store_id": 7624273,
          "name": "Red amla",
          "price": 190,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/TUuCZSZf.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/XYl07xAz.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 190,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28170440,
          "store_id": 7624273,
          "name": "Mango",
          "price": 375,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/fKkoWzEl.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/HH7ptCWs.webp",
          "images": null,
          "available": 1,
          "description": "",
          "description_detail": null,
          "discounted_price": 370,
          "has_images": 5,
          "variants": [],
          "variants_count": 21,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28490931,
          "store_id": 7624273,
          "name": "Grapes plant",
          "price": 85,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/AMGRp3gL.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/MJQn7Y5V.webp",
          "images": null,
          "available": 1,
          "description":
              "Delivery charge is not include with the bill. It will sent to your WhatsApp number ",
          "description_detail": null,
          "discounted_price": 85,
          "has_images": 2,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29051778,
          "store_id": 7624273,
          "name": "Strawberry Plant Mini",
          "price": 65,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/fQSF6Btm.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/X6y7pKy3.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the bill.",
          "description_detail": "",
          "discounted_price": 60,
          "has_images": 1,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 28493070,
          "store_id": 7624273,
          "name": "Jackruit plant",
          "price": 150,
          "category": {
            "id": 5566192,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/default_image.png",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/store-items/default_image.png",
          "images": null,
          "available": 0,
          "description":
              "Delivery charge is not include with the rate. It will send to your WhatsApp number.",
          "description_detail": null,
          "discounted_price": 150,
          "has_images": 0,
          "variants": [],
          "variants_count": 0,
          "tags": [],
          "low_quantity": 0,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    },
    {
      "category": {
        "id": 5754557,
        "name": "vegetable plant",
        "master_sub_category": 0,
        "image_url": "",
        "active_products": 0,
        "selected_products": 0,
        "full_category": false,
        "products_config": null
      },
      "items": [
        {
          "id": 29021832,
          "store_id": 7624273,
          "name": "Bell Pepper (Capcicum)",
          "price": 80,
          "category": {
            "id": 5754557,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/YxLSzWVn.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/1LkZYAJC.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the total bill.",
          "description_detail": "",
          "discounted_price": 77,
          "has_images": 4,
          "variants": [],
          "variants_count": 3,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        },
        {
          "id": 29022040,
          "store_id": 7624273,
          "name": "Brinjal 10 Pcs 1 Inch Pot",
          "price": 55,
          "category": {
            "id": 5754557,
            "name": "",
            "master_sub_category": 0,
            "image_url": "",
            "active_products": 0,
            "selected_products": 0,
            "full_category": false,
            "products_config": null
          },
          "image_url":
              "https://cdn.dotpe.in/longtail/store-items/7624273/44yCBZOY.jpeg",
          "thumbnail_url":
              "https://cdn.dotpe.in/longtail/item_thumbnails/7624273/J3O0ngXF.webp",
          "images": null,
          "available": 1,
          "description":
              "delivery charge is not include with the rate. It will be sent to your WhatsApp number with the bill.",
          "description_detail": "",
          "discounted_price": 50,
          "has_images": 4,
          "variants": [],
          "variants_count": 2,
          "tags": [],
          "low_quantity": 5,
          "available_quantity": 0,
          "managed_inventory": 0,
          "master_item_id": 0,
          "is_active": 1,
          "collections": [],
          "tax": {"id": 0, "hsn_sac_code": "", "gst": 0}
        }
      ]
    }
  ],
  "tags_items": []
};
