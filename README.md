FRONTEND - MIDDLE_END - BACKEND

- We need an intermediate layer between the client side and the microservices
- Using this MIDDLE_END, when client sends request we will be able to make decision that which microservice 
should actually respond to this request.
- We can do message validation, response transformation, rate limiting.
- We try to prepare an API Gateway that acts as this MIDDLE_END.