import React, { useCallback, useMemo, useState } from "react";

const FeedList = React.memo(({data}) => {
    return(
        <ul>
            {
                data.map((item) => (
                    <li key = {item.id}>{item.title}</li>
                ))
            }
        </ul>
    )
});

const Feeds = ({data}) => {
    const [like,setLike] = useState(0);
    const totalLikes = useMemo(() => data.reduce((acc,currentValue)=> {
        acc += currentValue.likes;
        return acc;
    },0),[data]);

    const handleExtraLikeClick = useCallback(() => setLike((oldValue) => oldValue+1),[]);

    return(
        <div style={{flexDirection:'column'}}>
            <div>Extra Like: {like} <button onClick={handleExtraLikeClick}>+1</button></div>
            <div>Total Likes: {totalLikes}</div>
            <FeedList data={data}></FeedList>
        </div>
    )
}

const feedData = [...Array(1000)].map((item,idx) => ({
    id: idx + 1,
    title: `Feed ${idx + 1}`,
    likes: idx + 10,
}));

const HookExamples = function() {
    return(
        <Feeds data={feedData} />
    )
}

export default HookExamples;