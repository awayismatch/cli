/**
 * Created by John on 2017/5/27.
 */
import demo from './demo'

export default function*(){
    yield [
        demo(),
    ]
}