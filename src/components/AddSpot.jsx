import {useState} from 'react';

function AddSpot({updateSkateSpot}) {
    const [formData, setFormData] = useState({
    name: '',
    location: '',
    level: '',
    level_icon: '',
    image: ''
    });


 const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    updateSkateSpot(formData);
    setFormData({ name: '', location: '', level: '', level_icon: '', image: '' });
  };

    return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Level:</label>
        <input
          type="num"
          name="level"
          value={formData.level}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default AddSpot;