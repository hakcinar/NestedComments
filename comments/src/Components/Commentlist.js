import React, { useEffect, useState } from 'react'
import Data from '../Data';
import Comment from './Comment';

const Commentlist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Data);
    console.log(data)
  }, [])
  return (
    <div>
      {data.map((parentComment) => (
        <div key={parentComment.id}>
          <Comment
            Author={parentComment.Author}
            Date={parentComment.Date}
            Comment={parentComment.Comment}
          />
        </div>
      ))}
    </div>
  )
}

export default Commentlist