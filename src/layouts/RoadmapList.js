// src/layouts/RoadmapList.js
import React from 'react';

const roadmapData = [
  {
    subtitle: 'Q1 2025',
    tasks: [
      { text: 'Create the Main Hub', done: true },
      { text: 'Create the Sub Hub', done: true },
    ],
  },
  {
    subtitle: 'Q2 2025',
    tasks: [
      { text: 'Initialize Token Distribution', done: false },
      { text: 'Launch Public Testnet', done: false },
    ],
  },
  {
    subtitle: 'Q3 2025',
    tasks: [
      { text: 'Open Public Sale', done: false },
      { text: 'Establish Governance Framework', done: false },
    ],
  },
];

const tokenTasks = [
  { text: 'Seed Round', done: false },
  { text: 'Private Sale', done: false },
  { text: 'Public Sale', done: false },
];

function truncateTask(task, limit = 20) {
  if (task.length > limit) {
    return task.substring(0, limit) + '...';
  }
  return task;
}

function RoadmapList({ isOpen, setIsOpen }) {
  const arrow = isOpen ? '›' : '‹';

  return (
    <div className={`right-sidebar-wrapper ${isOpen ? 'open' : 'collapsed'}`}>
      <div
        className="right-sidebar-handle"
        onClick={() => setIsOpen(!isOpen)}
        title="Toggle Roadmap"
      >
        {arrow}
      </div>

      <aside className="right-sidebar">
        <h4 className="roadmap-title">Roadmap</h4>
        {roadmapData.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <h5 className="roadmap-subtitle">{group.subtitle}</h5>
            <ul className="roadmap-list">
              {group.tasks.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <span className={`bullet ${item.done ? 'done' : ''}`}></span>
                  {truncateTask(item.text)}
                </li>
              ))}
            </ul>
          </React.Fragment>
        ))}

        <h4 className="token-title">Token Offering</h4>
        <ul className="roadmap-list">
          {tokenTasks.map((item, index) => (
            <li key={index}>
              <span className={`bullet ${item.done ? 'done' : ''}`}></span>
              {truncateTask(item.text)}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default RoadmapList;
