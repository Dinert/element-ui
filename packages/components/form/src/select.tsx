import {defineComponent, PropType} from '@vue/composition-api'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'

export default defineComponent({
    name: 'dinert-select',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps>,
            default: () => ({})
        },
    },
    computed: {
        options() {
            const options = this.formItem.options || {}
            return options
        }
    },
    render() {
        const options = this.options.options || []

        return (
            <el-select
                v-model={this.form.model[this.formItem.key]}
                attrs={{
                    filterable: true,
                    clearable: true,
                    ...this.options
                }}
                on={this.options.on}
                ref={'selectRef'}
            >
                {
                    options.map(item => {
                        return (<el-option
                            key={item.value}
                            attrs={{
                                ...item,
                                label: item[(this.options.label || 'label')],
                                value: item[(this.options.value || 'value')]
                            }}
                        >
                        </el-option>)
                    })
                }

                {this.$scopedSlots.empty && (<template slot="empty">{this.$scopedSlots.empty(this.formItem)}</template>)}
                {this.$scopedSlots.prefix && (<template slot="prefix">{this.$scopedSlots.prefix(this.formItem)}</template>)}
            </el-select>
        )
    }
})

