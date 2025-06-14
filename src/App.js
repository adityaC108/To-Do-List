import React, { useState } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React JS', completed: false, createdAt: new Date('2025-06-10') },
    { id: 2, text: 'Complete assignments', completed: true, createdAt: new Date('2025-06-11') },
    { id: 3, text: 'Work on project', completed: false, createdAt: new Date('2025-06-12') }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  
  const [error, setError] = useState('');
  
  const [filter, setFilter] = useState('all');
  
  const [sortBy, setSortBy] = useState('newest');
  
  // Function to add a new task
  const addTask = () => {
    if (!inputValue.trim()) {
      setError('Please enter a task!');
      return;
    }
    
    // Check if task already exists (case-insensitive)
    const taskExists = tasks.some(task => 
      task.text.toLowerCase() === inputValue.trim().toLowerCase()
    );
    
    if (taskExists) {
      setError('This task already exists!');
      return;
    }
    
    // Create new task object
    const newTask = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTasks([newTask, ...tasks]);
    
    setInputValue('');
    setError('');
  };
  
  // Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  // Function to toggle task completion
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };
  
  // Function to handle Enter key press in input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  
  // Function to filter tasks based on current filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };
  
  // Function to sort filtered tasks
  const getSortedTasks = () => {
    const filteredTasks = getFilteredTasks();
    
    switch (sortBy) {
      case 'oldest':
        return [...filteredTasks].sort((a, b) => a.createdAt - b.createdAt);
      case 'alphabetical':
        return [...filteredTasks].sort((a, b) => a.text.localeCompare(b.text));
      case 'newest':
      default:
        return [...filteredTasks].sort((a, b) => b.createdAt - a.createdAt);
    }
  };
  
  const displayTasks = getSortedTasks();

  // CSS styles object
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    title: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#666',
      fontSize: '1.1rem'
    },
    statsContainer: {
      backgroundColor: '#e3f2fd',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.9rem',
      color: '#1976d2'
    },
    inputContainer: {
      marginBottom: '20px'
    },
    inputRow: {
      display: 'flex',
      gap: '10px',
      marginBottom: '10px'
    },
    input: {
      flex: 1,
      padding: '12px',
      border: '2px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.3s'
    },
    inputFocus: {
      borderColor: '#2196f3'
    },
    addButton: {
      padding: '12px 24px',
      backgroundColor: '#3f51b5',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    addButtonHover: {
      backgroundColor: '#303f9f'
    },
    error: {
      color: '#f44336',
      fontSize: '0.9rem',
      marginTop: '5px'
    },
    controlsContainer: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '20px',
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    },
    controlGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: '#555'
    },
    select: {
      padding: '6px 12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '0.9rem',
      outline: 'none'
    },
    tasksList: {
      marginBottom: '20px'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '15px',
      backgroundColor: 'white',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      marginBottom: '8px',
      transition: 'all 0.3s'
    },
    taskItemCompleted: {
      backgroundColor: '#e8f5e8',
      borderColor: '#4caf50'
    },
    checkbox: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '2px solid #ddd',
      backgroundColor: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s'
    },
    checkboxCompleted: {
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
      color: 'white'
    },
    taskText: {
      flex: 1,
      fontSize: '1rem',
      color: '#333'
    },
    taskTextCompleted: {
      textDecoration: 'line-through',
      color: '#999'
    },
    taskDate: {
      fontSize: '0.8rem',
      color: '#999'
    },
    removeButton: {
      width: '30px',
      height: '30px',
      backgroundColor: '#ffebee',
      border: 'none',
      borderRadius: '50%',
      color: '#f44336',
      cursor: 'pointer',
      fontSize: '1.2rem',
      transition: 'background-color 0.3s'
    },
    removeButtonHover: {
      backgroundColor: '#ffcdd2'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#999'
    },
    emptyIcon: {
      fontSize: '3rem',
      marginBottom: '10px'
    },
    tipsContainer: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px'
    },
    tipsTitle: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: '#555',
      marginBottom: '10px'
    },
    tipsList: {
      fontSize: '0.8rem',
      color: '#666',
      lineHeight: '1.6'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>My To-Do List</h1>
        <p style={styles.subtitle}>Stay organized and get things done!</p>
      </div>
      

      
      {/* Add Task Section */}
      <div style={styles.inputContainer}>
        <div style={styles.inputRow}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (error) setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
            style={styles.input}
          />
          <button
            onClick={addTask}
            style={styles.addButton}
            onMouseOver={(e) => e.target.style.backgroundColor = styles.addButtonHover.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = styles.addButton.backgroundColor}
          >
             Add
          </button>
        </div>
        
        {/* Error Message */}
        {error && (
          <p style={styles.error}>{error}</p>
        )}
      </div>
      
      {/* Filter and Sort Controls */}
      <div style={styles.controlsContainer}>

        <div style={styles.controlGroup}>
          <span style={styles.label}> Filter:</span>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={styles.select}
          >
            <option value="all">All Tasks</option>
            <option value="active">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div style={styles.controlGroup}>
          <span style={styles.label}> Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={styles.select}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">A-Z</option>
          </select>
        </div>
      </div>
      
      {/* Tasks List */}
      <div style={styles.tasksList}>
        {displayTasks.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              {filter === 'all' ? '' : filter === 'active' ? '⏳' : '✅'}
            </div>
            <p>
              {filter === 'all' 
                ? 'No tasks yet. Add one above!' 
                : filter === 'active'
                ? 'No active tasks. Great job!'
                : 'No completed tasks yet.'
              }
            </p>
          </div>
        ) : (
          displayTasks.map((task) => (
            <div
              key={task.id}
              style={{
                ...styles.taskItem,
                ...(task.completed ? styles.taskItemCompleted : {})
              }}
            >
              {/* Complete/Incomplete Button */}
              <div
                onClick={() => toggleComplete(task.id)}
                style={{
                  ...styles.checkbox,
                  ...(task.completed ? styles.checkboxCompleted : {})
                }}
              >
                {task.completed && '✓'}
              </div>
              
              {/* Task Text */}
              <span
                style={{
                  ...styles.taskText,
                  ...(task.completed ? styles.taskTextCompleted : {})
                }}
              >
                {task.text}
              </span>
              
              {/* Task Date */}
              <span style={styles.taskDate}>
                {task.createdAt.toLocaleDateString()}
              </span>
              
              {/* Remove Button */}
              <button
                onClick={() => removeTask(task.id)}
                style={styles.removeButton}
                onMouseOver={(e) => e.target.style.backgroundColor = styles.removeButtonHover.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = styles.removeButton.backgroundColor}
                title="Remove task"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
}