<template>
    <div>
        <h1>Radio 单选框</h1>
        <p>可选项单项选择,切换单选选择状态</p>
        <h2>基本用法</h2>
        <p>使用 v-model 双向绑定数据。</p>
        <DocMarkdown
            :code="code.base"
            jsfiddle="//jsfiddle.net/qq282126990/anmvzoL7/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Default.vue"
        >
            <Default slot="demo"></Default>
        </DocMarkdown>
        <h2>组合使用</h2>
        <p>
            使用
            <code>IvueRadioGroup</code>
            实现一组选项组，组合会自动使用
            <code>IvueRadio</code>的
            <code>label</code>
            属性来自动判断当前选项是否选中，每个
            <code>IvueRadio</code>的内容都是自定义的，如果不定义内容，那么
            <code>IvueRadio</code>
            将自动使用
            <code>label</code>
            的值作为内容
        </p>
        <DocMarkdown
            :code="code.group"
            jsfiddle="//jsfiddle.net/qq282126990/bv5t49xk/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Group.vue"
        >
            <Group slot="demo"></Group>
        </DocMarkdown>
        <h2>不可用</h2>
        <p>
            通过设置
            <code>disabled</code>属性禁用单选框
        </p>
        <DocMarkdown
            :code="code.disabled"
            jsfiddle="//jsfiddle.net/qq282126990/yeoxn70d/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Disabled.vue"
        >
            <Disabled slot="demo"></Disabled>
        </DocMarkdown>
        <h2>垂直</h2>
        <p>
            设置属性
            <code>vertical</code>使
            <code>IvueRadioGroup</code>垂直显示
        </p>
        <DocMarkdown
            :code="code.vertical"
            jsfiddle="//jsfiddle.net/qq282126990/d8ngzmfo/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Vertical.vue"
        >
            <Vertical slot="demo"></Vertical>
        </DocMarkdown>
        <h2>尺寸</h2>
        <p>
            通过设置
            <code>size</code>为
            <code>large</code>或
            <code>small</code>将按钮样式设置为大/小尺寸，不设置为默认尺寸。
        </p>
        <DocMarkdown
            :code="code.size"
            jsfiddle="//jsfiddle.net/qq282126990/gyj25o4t/"
            github="//github.com/qq282126990/ivue.com/blob/master/src/views/components/radio/Size.vue"
        >
            <Size slot="demo"></Size>
        </DocMarkdown>
        <h3>radio props</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>value</td>
                        <td>
                            可以使用
                            <code>v-model</code>双向绑定数据
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>
                            只有在使用
                            <code>IvueRadioGroup</code>时有效。指定当前选项的
                            <code>value</code>值，
                            <code>IvueRadioGroup</code>会判断需要激活的项目
                        </td>
                        <td>String | Number</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>disabled</td>
                        <td>是否禁用当前项</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>size</td>
                        <td>
                            尺寸，可选值为
                            <code>large</code>、
                            <code>small</code>、
                            <code>default</code>
                        </td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>true-value</td>
                        <td>当前选择的值，当使用类似 1 和 0 来判断是否选中时会很有用，需要配合 value 去完成</td>
                        <td>String, Number, Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>false-value</td>
                        <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用，需要配合 value 去完成</td>
                        <td>String, Number, Boolean</td>
                        <td>true</td>
                    </tr>
                    <tr>
                        <td>text-color</td>
                        <td>设置当前内容的颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>设置当前圆圈⭕️的颜色</td>
                        <td>String</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>ripple-disabled</td>
                        <td>是否禁用涟漪效果</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>radio event</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>on-change</td>
                        <td>只在单独使用时有效, 在选项状态发生改变时触发，返回当前状态。</td>
                        <td>value</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>radio group props</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>value</td>
                        <td>
                            可以使用
                            <code>v-model</code>双向绑定数据
                        </td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                    <tr>
                        <td>vertical</td>
                        <td>是否垂直排列</td>
                        <td>Boolean</td>
                        <td>false</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h3>radio group event</h3>
        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>事件名</th>
                        <th>说明</th>
                        <th>返回值</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>on-change</td>
                        <td>在选项状态发生改变时触发，返回当前状态。</td>
                        <td>value</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import DocMarkdown from '@/components/DocMarkdown';
import Default from './components/radio/Default.vue';
import Group from './components/radio/Group.vue';
import Disabled from './components/radio/Disabled.vue';
import Vertical from './components/radio/Vertical.vue';
import Size from './components/radio/Size.vue';

import Code from '@/code/radio';

export default {
    name: 'ivue-component-radio',
    data () {
        return {
            code: Code
        }
    },
    components: {
        DocMarkdown,
        Default,
        Group,
        Disabled,
        Vertical,
        Size
    }
}
</script>

<style scoped>
</style>
