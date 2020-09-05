import {input, outputShape} from 'test-data';
import replacer from '@ria-develop/js-expressions-client';

document.body.innerHTML = `
<span>input:</span><br/>
<pre>${JSON.stringify(input, null, '  ')}</pre><br/>
<span>output:</span><br/>
<pre>${JSON.stringify(outputShape, replacer(input), '  ')}</pre>`;
