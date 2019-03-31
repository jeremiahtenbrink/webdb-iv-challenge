# webdb-iv-challenge v1.0.0

Api to store and read dishes, recipes, and ingredients of the recipes.

- [Dishes](#dishes)
	- [Create a new dish](#create-a-new-dish)
	- [Gets dish and recipes](#gets-dish-and-recipes)
	- [Gets all dishes](#gets-all-dishes)
	
- [Recipes](#recipes)
	- [Create recipe.](#create-recipe.)
	- [Get recipe](#get-recipe)
	- [Get all recipes](#get-all-recipes)
	


# Dishes

## Create a new dish



	POST /dishes


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>Name of the dish.</p>							|

### Examples

Example Post:

```
axios.post('/dishes/',
{
     name: "String"
});
```

### Success Response

Success Example:

```

{
    "id": 1,
    "name": "Dish Name"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Gets dish and recipes



	GET /dishes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>Dish ID</p>							|

### Examples

Example get:

```
axios.get('/dishes/4');
```

### Success Response

Example:

```

 {
    "id": 1,
    "name": "Tacos",
    "recipes": [
        {
            "id": 1,
            "name": "Fish Tacos",
            "dish_id": 1,
            "instructions": "Deep fry fish, Place into tortilla."
        },
        {
            "id": 6,
            "name": "Beef Tacos",
            "dish_id": 1,
            "instructions": "Cook beef add to tacos"
        }
    ]
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Gets all dishes



	GET /dishes


### Examples

Example get:

```
axios.get('/dishes');
```

### Success Response

Success Example:

```
[
    {
        "id": 1,
        "name": "Tacos"
    },
    {
        "id": 2,
        "name": "Ribs"
    }
]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Recipes

## Create recipe.



	POST /recipes/


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>Name of the recipe.</p>							|
| instructions			| String			|  <p>Recipe instructions.</p>							|
| id			| Number			|  <p>ID of the dish the recipe is for.</p>							|

### Examples

Example post:

```
axios.post('/recipes',
{
    name: "Name of dish",
    instructions: "Instructions to prepare dish",
    dish_id: 4
})
```

### Success Response

Success Example:

```

{
    "id":   30,
   "name": "Fish Tacos",
   "instructions": "Deep fry fish, place into tortilla.",
   "dis_id": "4"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get recipe



	GET /recipes/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>ID of the recipe.</p>							|

### Examples

Example get:

```
axios.get('/recipes/4');
```

### Success Response

Example:

```

{
   "name": "Fish Tacos",
   "instructions": "Deep fry fish, place into tortilla.",
   "dish_name": "Tacos"
}
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
## Get all recipes



	GET /recipes/


### Examples

Example get:

```
axios.get('/recipes');
```

### Success Response

Example:

```
[
 {
    "name": "Fish Tacos",
    "instructions": "Deep fry fish, place into tortilla.",
    "dish_name": "Tacos"
 },
 {
    "name": "BBQ Ribs",
    "instructions":  "Cover rack in bbq sauces and place in over at 400 till internal temperature is good.",
      "dish_name": "Ribs"
 }
]
```
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```

