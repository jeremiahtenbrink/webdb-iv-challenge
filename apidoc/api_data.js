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
    "filename": "src/dishes/dishes-router.js",
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
    "filename": "src/dishes/dishes-router.ts",
    "groupTitle": "Dishes",
    "sampleRequest": [
      {
        "url": "http://localhost:3200/dishes"
      }
    ]
  }
] });