# Installation Steps



## Using npm

Run commands

1) ```npm install```

2) ``` export NODE_OPTIONS=--openssl-legacy-provider  ```



2) ```npm run dev```


## Or using yarn

Run commands 

1) ```npm install --global yarn```

2) ```yarn install```

3) ```yarn run dev```


### If you see the window below then you are set to build AMAZON 2.0!

![Template Screenshot](TemplateScreenshot.jpg?raw=true "Template Screenshot")

4) connection stripe webhook ```stripe listen --forward-to localhost:3000/api/webhook```