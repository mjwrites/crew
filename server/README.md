# Getting started

## Create a guest

**Example request**

**Query**

- firstName: `string`
- lastName: `string`
- folio: `string`
- room: `string`

```
http://localhost:7000/api/v1/guest?firstName=John&lastName=Doe&folio=4321&room=123
```

**Example response**

```
{
	"success": true,
	"message": "Guest created",
	"guest": {
		"_id": "5b564c09f00fff086acd50a9",
		"firstName": "John",
		"lastName": "Doe",
		"folio": "4321",
		"room": "123",
		"__v": 0
	}
}◊
```

## Create a ticket for the guest

**Example request**

- ticketNumber: `string`
- issue: `string`
- folio: `string`
- loyalty: `string` **DEFAULT** standard

```
http://localhost:7000/api/v1/ticket?ticketNumber=123&issue=MY ISSUE&folio=321
```

**Example response**

```
{
	"success": true,
	"guest": {
		"_id": "5b564c09f00fff086acd50a9",
		"firstName": "John",
		"lastName": "Doe",
		"folio": "4321",
		"room": "123",
		"__v": 0
	}
}
```
