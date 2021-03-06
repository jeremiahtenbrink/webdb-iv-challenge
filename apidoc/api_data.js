define({ "api": [
  {
    "type": "post",
    "url": "/dishes",
    "title": "Create a new dish",
    "version": "1.0.0",
    "name": "CreateDish",
    "group": "Dishes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the dish.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example Post:",
        "content": "axios.post('/dishes/',\n{\n     name: \"String\"\n});",
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
          "title": "Success Example:",
          "content": "\n{\n    \"id\": 1,\n    \"name\": \"Dish Name\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/dishes/dishes-router.ts",
    "groupTitle": "Dishes",
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dishes/:id",
    "title": "Gets dish and recipes",
    "version": "1.0.0",
    "name": "GetDishWithID",
    "group": "Dishes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Dish ID</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example get:",
        "content": "axios.get('/dishes/4');",
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "recipes",
            "description": "<p>Array of recipes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\n {\n    \"id\": 1,\n    \"name\": \"Tacos\",\n    \"recipes\": [\n        {\n            \"id\": 1,\n            \"name\": \"Fish Tacos\",\n            \"dish_id\": 1,\n            \"instructions\": \"Deep fry fish, Place into tortilla.\"\n        },\n        {\n            \"id\": 6,\n            \"name\": \"Beef Tacos\",\n            \"dish_id\": 1,\n            \"instructions\": \"Cook beef add to tacos\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/dishes/dishes-router.ts",
    "groupTitle": "Dishes",
    "sampleRequest": [
      {
        "url": "https://webdb-iv-challenge.herokuapp.com/dishes/:id"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/dishes",
    "title": "Gets all dishes",
    "version": "1.0.0",
    "name": "GetDishes",
    "group": "Dishes",
    "examples": [
      {
        "title": "Example get:",
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
          "title": "Success Example:",
          "content": "[\n    {\n        \"id\": 1,\n        \"name\": \"Tacos\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Ribs\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/dishes/dishes-router.ts",
    "groupTitle": "Dishes",
    "sampleRequest": [
      {
        "url": "https://webdb-iv-challenge.herokuapp.com/dishes"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/recipes/",
    "title": "Create recipe.",
    "version": "1.0.0",
    "name": "CreateRecipe",
    "group": "Recipes",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the recipe.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>Recipe instructions.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the dish the recipe is for.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example post:",
        "content": "axios.post('/recipes',\n{\n    name: \"Name of dish\",\n    instructions: \"Instructions to prepare dish\",\n    dish_id: 4\n})",
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
            "description": "<p>ID of the new recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>Instructions for preparing the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "dish_id",
            "description": "<p>ID of the dish the recipe is for.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Example:",
          "content": "\n{\n    \"id\":   30,\n   \"name\": \"Fish Tacos\",\n   \"instructions\": \"Deep fry fish, place into tortilla.\",\n   \"dis_id\": \"4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/recipies/recipies-router.ts",
    "groupTitle": "Recipes",
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/recipes/:id",
    "title": "Get recipe",
    "version": "1.0.0",
    "name": "GetRecipe",
    "group": "Recipes",
    "examples": [
      {
        "title": "Example get:",
        "content": "axios.get('/recipes/4');",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the recipe.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>Instructions for preparing the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_name",
            "description": "<p>Name of the dish.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "\n{\n   \"name\": \"Fish Tacos\",\n   \"instructions\": \"Deep fry fish, place into tortilla.\",\n   \"dish_name\": \"Tacos\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/recipies/recipies-router.ts",
    "groupTitle": "Recipes",
    "sampleRequest": [
      {
        "url": "https://webdb-iv-challenge.herokuapp.com/recipes/:id"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/recipes/",
    "title": "Get all recipes",
    "version": "1.0.0",
    "name": "GetRecipes",
    "group": "Recipes",
    "examples": [
      {
        "title": "Example get:",
        "content": "axios.get('/recipes');",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "instructions",
            "description": "<p>Instructions for preparing the recipe.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dish_name",
            "description": "<p>Name of the dish.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example:",
          "content": "[\n {\n    \"name\": \"Fish Tacos\",\n    \"instructions\": \"Deep fry fish, place into tortilla.\",\n    \"dish_name\": \"Tacos\"\n },\n {\n    \"name\": \"BBQ Ribs\",\n    \"instructions\":  \"Cover rack in bbq sauces and place in over at 400 till internal temperature is good.\",\n      \"dish_name\": \"Ribs\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/recipies/recipies-router.ts",
    "groupTitle": "Recipes",
    "sampleRequest": [
      {
        "url": "https://webdb-iv-challenge.herokuapp.com/recipes/"
      }
    ],
    "error": {
      "fields": {
        "Error XXX": [
          {
            "group": "Error XXX",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>The status code response.</p>"
          },
          {
            "group": "Error XXX",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Error message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Example:",
          "content": "ERROR XXX\n{\n    \"status\": xxx,\n    \"message\": \"Some Error Message\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
