import React from 'react';
import { Flex } from 'antd';

const styleTxt = `
.blog-css-tricks {
  border: 1px solid #0958d9;
  width: 200px;
  height: 50px;
}

.blog-css-tricks {
  @container style(--custom-var) {
    p {
      color: green;
    }
  }
}
`;

const Block: React.FC<React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>> = (props) => { throw new Error("STUB"); };

const Example: React.FC = () => { throw new Error("STUB"); };

export default Example;
