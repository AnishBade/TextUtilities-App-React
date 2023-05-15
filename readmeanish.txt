issue:
export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' [duplicate]
solution:
In version 6, Switch got replaced by Routes. Try this import {Routes} from 'react-router-dom';.
actual solution: https://reactrouter.com/en/6.8.1/upgrading/v5