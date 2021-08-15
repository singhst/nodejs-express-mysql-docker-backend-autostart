# nodejs-mysql-docker-backend

## Instructions on starting the project
Steps:

1. Start the API server,
    ```javascript
    node app.js
    ```
2. Send request to server!
    
    Test with Postman, request to Get All Plans:
    
        Method:  GET
        URL:     http://localhost:4000/item
    
    [image]

## To test this program

[xxxxxx]

## File usage
1. `app.js` - creating server and server configuration
2. `item.route.js` - handling routes
3. `item.controller.js` - handling client request/response
4. `item.model.js` - dealing with database operations
5. `db.js` - for database configurations

## API document

[xxxxx]

## Note

1.  Why use `POST` HTTP request to do Read operation?

    Ans: `GET` HTTP method is suggested NOT TO handle entity-body (i.e. JSON body) in a request. So, we use `POST` request instead.

    Ref,
    1. https://stackoverflow.com/questions/978061/http-get-with-request-body
    2. https://datatracker.ietf.org/doc/html/rfc2616#page-53

    Code in `item.route.js`:
    ```js
    // Retrieve a single item with id
    router.post('/name', controller.findByName);
    ```
2.  Data structure in `item.model.js`:
    ```js
    // Item Object

    var Item = function(item){
        this.plan_id = item.plan_id;
        this.plan_name = item.plan_name;
        this.general = item.general;
        this.specialist = item.specialist;
        this.physiotherapy = item.physiotherapy;
        this.SYMPTOM_n = item.SYMPTOM_n;
        this.plan_desc = item.plan_desc;
        this.plan_month_price = item.plan_month_price;
    };
    ```

3.  Why need an extra shell script while `depends_on` exists in `docker-compose.yaml`?  

    Ans: 

    `depends_on` does not guarantee the execution of services will be kept in order.
    
    So it needs to use shell script (i.e. `wait.sh`) to control the execution of the services.
    ```yaml
    version: "3"

    services:
    nodejs:
        image: rest-app
        restart: on-failure # restart the app if app fails to start
        build:  # looking for Dockerfile in "./app" to build this "nodejs" image
        context: ./app
        dockerfile: Dockerfile
        depends_on: # indicate "db" service should be executed first 
        - db
        ports:
        - "4000:4000" # map host port 4000 to container port 4000
        # entrypoint: ["./wait.sh"] # In case "depends_on" not work, use this shell script to control the service execution order
                                # "entrypoint" keyword: to execute the shell script file, i.e., wait.sh.
    
    ...
    ```


=======================================

##### Design steps

1. Design data model in MySQL ==> `testing-and-data-model.sql`
2. Desgin the API routing in `item.route.js` 
3. Design functions in `item.model.js` to interact with MySQL database
4. Design `


##### Reference

[link-api-server](https://roytuts.com/nodejs-express-mysql-rest-api-crud-example/)

[link-docker-compose](https://roytuts.com/docker-compose-dockerizing-nodejs-mysql-rest-api-crud-example/)