import React from 'react';

const NoMatch = () => {
    return <div>
        <div class="text-center">
        <img src={process.env.PUBLIC_URL + "/images/quest.png"} />
        <img src={process.env.PUBLIC_URL + "/images/dot.png"} />
        </div>
        <br></br> 
        <div class="nom">
            <h1 class="text-center">
                No Quests Here, Young Adventurer...
            </h1>
            </div>
    </div>
}

export default NoMatch;