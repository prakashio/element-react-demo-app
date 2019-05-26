import React from "react";
import { Layout, Select } from "element-react";

function Sort() {

    const sort = [
        {
            value: "SORT_TOP_RATING",
            label: "Top Rating"
        },
        {
            value: "SORT_LOW_RATING",
            label: "Low Rating"   
        }
    ];

    return (
        <Layout.row gutter="20" justify="end">
            <Layout.Col span="6">
                <Select value={this.state.value}>
                    {this.state.cities.map(el => {
                        return (
                            <Select.Option key={el.value} label={el.label} value={el.value}>
                                <span style={{ float: "left" }}>{el.label}</span>
                                <span
                                    style={{
                                        float: "right",
                                        color: "#8492a6",
                                        fontSize: 13
                                    }}
                                >
                                    {el.value}
                                </span>
                            </Select.Option>
                        );
                    })}
                </Select>
            </Layout.Col>
        </Layout.row>
    );
}

export default Sort;
