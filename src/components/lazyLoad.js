import React ,{Suspense} from 'react';

const AsyncLeftPanel = React.lazy(() => import("./LeftPanel"))  //
const LazyLoadDemo = () => {   //
    return (
        <Suspense fallback={<div>Loading....</div>}>
            <AsyncLeftPanel></AsyncLeftPanel>
        </Suspense>
    )
};
export default LazyLoadDemo;