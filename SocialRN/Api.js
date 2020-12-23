async function getUser() {
    try {
      let response = await fetch(
        'https://api-with-mongo.herokuapp.com/users/getusers',
      );
      let responseJson = await response.json();
      console.log(responseJSon);
      return responseJson;
    } catch (error) {
      console.error(error);
    };
  };

  async function createUser() {
    try {
      let response = await fetch(
        '',
      );
      let responseJson = await response.json();
      console.log(responseJSon);
      return responseJson;
    } catch (error) {
      console.error(error);
    };
  };
    
