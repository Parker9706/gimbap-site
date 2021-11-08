import React from 'react';

import Typography from '@mui/material/Typography';
import { CopyBlock, dracula, a11yLight } from 'react-code-blocks';


export default function Installation() {


  return (<>
    <Typography variant="h4" component="h2" id="installation" color="textPrimary">
      Installation
    </Typography><Typography variant="body1" id="installation-body" color="textPrimary">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis egestas urna id ornare. Phasellus a ligula vitae justo tincidunt consequat. Sed pulvinar blandit commodo. Morbi at nibh condimentum, eleifend nulla dictum, rutrum est. Sed porttitor venenatis lorem eu accumsan. Donec id diam ex. Nulla et felis fermentum, placerat orci sit amet, porta sapien. Aliquam tempor diam eget metus cursus, in vulputate dui porta. Nulla volutpat dui quis mi maximus, eget fermentum est dapibus. Sed consequat vel odio at tincidunt. Mauris porta dui ligula, non ultrices turpis dignissim vel. Nunc nec sodales lorem. In feugiat at tortor quis molestie. Maecenas eget risus venenatis, sollicitudin nisi in, aliquam sem. Aenean eu auctor arcu. Quisque facilisis ut neque a interdum. Maecenas dictum nibh vitae lectus congue vulputate vitae at tellus. Etiam dignissim felis eu est faucibus, sodales interdum sapien consectetur. Nam molestie, lectus in malesuada aliquam, nisi velit venenatis urna, quis fermentum sapien massa non elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tincidunt luctus est, ut consectetur urna imperdiet sit amet. Mauris quis urna dictum, blandit massa in, tempor augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi sagittis tristique molestie. Maecenas ornare, nunc a porttitor accumsan, mi risus suscipit dolor, nec imperdiet tortor lacus nec nisi. Donec dolor mi, fringilla id gravida id, pretium sed odio. Suspendisse lobortis, augue ac scelerisque pretium, ipsum augue venenatis risus, vel condimentum lacus felis non lectus. Nunc leo risus, malesuada quis purus et, ultricies ornare turpis. Donec sit amet lacinia sem. Quisque volutpat, erat non pellentesque tempor, nibh velit laoreet sapien, quis posuere velit odio nec massa. Aenean aliquet pulvinar tellus, sed mollis massa sodales quis. Phasellus euismod nec metus vitae hendrerit. Etiam nisi nisl, iaculis id interdum ac, rhoncus in augue. Nunc nec sapien euismod orci tincidunt porta nec quis libero. Quisque eget nulla ac nisi fringilla lobortis et rhoncus nisl. Etiam nec ultricies neque, nec tincidunt sapien. Aenean non ultricies tortor, tincidunt rhoncus magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vehicula felis turpis, et fermentum ante blandit ac. Quisque nisl lacus, dignissim a arcu eu, aliquet ultricies nibh. Phasellus porta, mauris quis facilisis tincidunt, tellus lacus mollis tellus, ut cursus tellus neque a turpis. Curabitur enim ex, egestas sed varius et, eleifend sed odio. Nunc suscipit ex arcu. Ut condimentum tincidunt justo eu rutrum. Praesent ut augue malesuada, elementum nisi at, hendrerit sem. In hac habitasse platea dictumst.Suspendisse porttitor ac diam id vulputate. Nulla eget luctus purus. Duis eget dui vel eros ultrices rutrum. Aliquam blandit, lorem dictum interdum suscipit, augue odio maximus sapien, et fringilla odio neque id velit. Donec pellentesque felis id ligula fermentum, ac fermentum tellus malesuada. Vivamus id blandit nunc. Vivamus tortor leo, volutpat non porta vitae, gravida sit amet ex. In sit amet aliquam mi, non suscipit neque. Nam at purus in libero facilisis tincidunt. Sed aliquet vel eros non iaculis. Quisque non erat non lectus vehicula tempus. Donec mi nisi, pretium eu nisi sit amet, convallis lacinia tortor. In mattis ut sapien in posuere. Fusce vitae sagittis sapien. Morbi commodo, felis id finibus ultrices, quam ex pretium lorem, sit amet iaculis nisl nibh ut massa.
    </Typography>
    <CopyBlock
      text={'npm install -g gimbap'}
      language={'bash'}
      showLineNumbers={true}
      startingLineNumber={1}
      theme={dracula}
    />
  </>);
}
