import React from 'react';
import {Badge} from "native-base";

    const badge = (props) => {
        return (
            <Badge colorScheme="primary" variant="solid" mb={4} _text={{fontSize: 16, fontWeight: 700, }}>{props.title}</Badge>
        );
    };

    export default badge;