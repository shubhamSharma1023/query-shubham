import "./style.css";
import { useState } from "react";

import QueryBlock from "./QueryBlock";
function QueryBuilder() {
    const mainQuery = [
        {
          id: 1,
          type: "and",
          rules: [
            { id: 2, type: "condition", rules: 1 },
            { id: 3, type: "condition", rules: 2 },
            {
              id: 4,
              type: "and",
              rules: [
                { id: 5, type: "condition", rules: 3 },
                {
                  id: 6,
                  type: "and",
                  rules: [
                    { id: 7, type: "condition", rules: 4 },
                    { id: 8, type: "condition", rules: 5 }
                  ]
                }
              ]
            }
          ]
        }
    ];
    const [state] = useState(mainQuery);
    return (
        <div className="rule-builder">
          <div className="rb-grid-row">
            <QueryBlock blocks={state} level={1} />
          </div>
        </div>
      );
}
export default QueryBuilder