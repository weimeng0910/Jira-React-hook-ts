import React from 'react';

const List = ({list,users}) => {
    return <table>

      <thead>
        <tr>
          <th>名称</th>
           <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map(project=><tr>
            <td>{project.name}</td>
            {/* undefined.name */}
            <td>{users.find(user=>user.id===project.personId)?.name ||'weizhi'}</td>
          </tr>)
        }
      </tbody>
    </table>;
};

export default List;