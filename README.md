# CrudinExpress
* Crud in contact form using nodejs and mondodb
* Get github api in projects from backend.


### Commit Style:
```bash
git commit -m "specific message here"
```
### Fearute Style:
```bash
git checkout -b "features/featurename"
```

## Packages Used
```
dependencies": {
    
    "axios",
    "cors",
    "dotenv",
    "express",
    "mongoose",
     "nodemon",
    "package""
    },
  ```

  ## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

 ## For Contact Crud
 ```
 routes
 useRouter.post("/", createUser);
useRouter.get("/", allUser);
useRouter.get("/:id", userDetails);
useRouter.patch("/:id", userUpdate);
useRouter.delete("/:id", userDelete);
 ```
 ## For Project from github api
 ```
useRouter.get("/", projectCreate);
useRouter.get("/allProject", projectAll);
useRouter.get("/:size", projectList);
 ```
 






