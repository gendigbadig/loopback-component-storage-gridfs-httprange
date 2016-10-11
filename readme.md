# loopback-component-storage-gridfs-httprange

This repo is modification from https://github.com/MrMartiniMo/loopback-component-storage-gridfs 
Made by my friend, ocky setyatmoko

Uses mongoDB [GridFS](https://docs.mongodb.org/manual/core/gridfs/) to manage binary contents of your loopback application.

### Inspired by
* https://github.com/strongloop/loopback-component-storage
* https://github.com/jdrouet/loopback-component-storage-mongo
* https://github.com/MrMartiniMo/loopback-component-storage-gridfs 

### Behaviors

* Files are identified by id, not by file name. So it is possible to have files of the same name in one container.
* Added HTTP Range Feature 

## Installation

```bash
npm install --save loopback-component-storage-gridfs-httprange
```

## Datasource

Add datasource to your datasources.json

```json
"storage": {
   "name": "gridfs",
   "connector": "loopback-component-storage-gridfs-httprange",
   "host": "hostname",
   "port": 27017,
   "database": "database",
   "username": "username",
   "password": "password"
 }
```

**username** and **password** are optional

## API

### List containers

```
GET /FileContainers
```
```javascript
FileContainer.getContainers();
```

<hr>

### Delete container

```
DELETE /FileContainers/:containerName
```
```javascript
FileContainer.deleteContainer({
  containerName: 'containerName',
  fileId: 'fileId'
});
```

  * **containerName** - name of container to delete

<hr>

### List files in container

```
GET /FileContainers/:containerName/files
```
```javascript
FileContainer.getFiles({
  containerName: 'containerName'
});
```

  * **containerName** - name of container

<hr>

### Get file information

```
GET /FileContainers/:containerName/files/:fileId
```
```javascript
FileContainer.getFile({
  containerName: 'containerName',
  fileId: 'fileId'
});
```

  * **containerName** - name of container
  * **fileId** - id of file

<hr>

### Delete file

```
DELETE /FileContainers/:containerName/files/:fileId
```
```javascript
FileContainer.deleteFile({
  containerName: 'containerName',
  fileId: 'fileId'
});
```

* **containerName** - name of container
* **fileId** - id of file to delete

<hr>

### Upload files

```
POST /FileContainers/:containerName/upload
```

* **containerName** - name of container

<hr>

### Download file

```
GET /FileContainers/:containerName/download/:fileId
```

* **containerName** - name of container
* **fileId** - id of file to download
