import { useState, useEffect } from "react";

function FetchDataComponent({name, isPacked}) {
  const [data, setData] = useState(null);
  if(data){
    const [firstUser, setFirstUser] = useState('')
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <p>Data Loaded! with fiorst user {data[0].name}</p>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default FetchDataComponent;
{
    /**
     * riules of hooks
     * 1. only call hooks at the top level
     * 2. only call hooks from react functions
     * 3. cannot call hooks inside loops, conditions or nested functions
     */
}