define({ "api": [
  {
    "type": "get",
    "url": "/dishes",
    "title": "Read data of all the dishes",
    "version": "1.0.0",
    "name": "GetDishes",
    "group": "Dishes",
    "examples": [
      {
        "title": "Example usage:",
        "content": "axios.get('/dishes');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the dish.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Dish name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\n{\n    \"id\": 1,\n    \"name\": \"Tacos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Number",
            "optional": false,
            "field": "status:",
            "description": "<p>500</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>&quot;Server Error&quot;</p>"
          }
        ]
      }
    },
    "filename": "./src/dishes/dishes-router.ts",
    "groupTitle": "Dishes",
    "sampleRequest": [
      {
        "url": "http://localhost:3200/dishes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/dishes",
    "title": "Read data of all the dishes",
    "version": "1.0.0",
    "name": "GetDishes",
    "group": "Dishes",
    "examples": [
      {
        "title": "Example usage:",
        "content": "axios.get('/dishes');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the dish.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Dish name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\n{\n    \"id\": 1,\n    \"name\": \"Tacos\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "type": "Number",
            "optional": false,
            "field": "status:",
            "description": "<p>500</p>"
          },
          {
            "group": "500",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>&quot;Server Error&quot;</p>"
          }
        ]
      }
    },
    "filename": "./src/dishes/dishes-router.js",
    "groupTitle": "Dishes",
    "sampleRequest": [
      {
        "url": "http://localhost:3200/dishes"
      }
    ]
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "F__Lambda_webdb_iv_challenge_apidoc_main_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_apidoc_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@types/connect/index.d.ts",
    "group": "F__Lambda_webdb_iv_challenge_node_modules__types_connect_index_d_ts",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules__types_connect_index_d_ts",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/@types/express-serve-static-core/index.d.ts",
    "group": "F__Lambda_webdb_iv_challenge_node_modules__types_express_serve_static_core_index_d_ts",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules__types_express_serve_static_core_index_d_ts",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/array-each/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_array_each_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_array_each_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_aws_sign2_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_read_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_read_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_json_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_raw_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_text_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_text_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_braces_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cache_base_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_class_utils_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_commander_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_component_emitter_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_content_disposition_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cookie_signature_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cookie_signature_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_cookie_signature_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_cookie_signature_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_copy_descriptor_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_copy_descriptor_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_browser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_debug_src_node_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_delegates_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/detect-file/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_detect_file_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_detect_file_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_etag_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_etag_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_expand_brackets_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_express_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_express_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_middleware_init_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_middleware_init_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_middleware_query_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_middleware_query_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_layer_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_route_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_router_route_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_express_lib_utils_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_extglob_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/findup-sync/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_findup_sync_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_findup_sync_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_fragment_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/json-schema-ref-parser/dist/ref-parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_json_schema_ref_parser_dist_ref_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_json_schema_ref_parser_dist_ref_parser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/json-schema-ref-parser/dist/ref-parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_json_schema_ref_parser_dist_ref_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_json_schema_ref_parser_dist_ref_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/dist/debug.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_dist_debug_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_browser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/common.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_common_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/debug/src/node.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_debug_src_node_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/knex/node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_knex_node_modules_ms_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_map_cache_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_media_typer_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_micromatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_ms_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_nanomatch_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_object_copy_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_object_copy_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object.defaults/immutable.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_object_defaults_immutable_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_object_defaults_immutable_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object.defaults/mutable.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_object_defaults_mutable_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_object_defaults_mutable_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/parse-passwd/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_parse_passwd_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_parse_passwd_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_path_to_regexp_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_path_to_regexp_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_regex_not_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_regex_not_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_regex_not_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_regex_not_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_repeat_string_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_repeat_string_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_send_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_compiler_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_parser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_node_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_snapdragon_util_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_static_extend_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_static_extend_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_to_regex_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_to_regex_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_to_regex_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_to_regex_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_use_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_use_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_use_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_use_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_util_deprecate_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_util_deprecate_browser_js",
    "name": "Private",
    "sampleRequest": [
      {
        "url": "http://localhost:3200private"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_util_deprecate_browser_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_util_deprecate_browser_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "F__Lambda_webdb_iv_challenge_node_modules_utils_merge_index_js",
    "groupTitle": "F__Lambda_webdb_iv_challenge_node_modules_utils_merge_index_js",
    "name": "Public",
    "sampleRequest": [
      {
        "url": "http://localhost:3200public"
      }
    ]
  }
] });
