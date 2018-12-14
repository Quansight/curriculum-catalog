(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(t,e,i){},140:function(t,e,i){"use strict";var a=i(139);i.n(a).a},141:function(t,e,i){"use strict";i.r(e);i(61),i(62),i(29);var a={components:{},data:function(){var t={field_options:[{name:"Python",avatar_url:"./Python_color.png"},{name:"AI / ML",avatar:"memory"},{name:"Data Science",avatar:"scatter_plot"},{name:"Other",avatar:"code"}],level_options:[{name:"Introduction",avatar:"exposure_zero"},{name:"Intermediate",avatar:"exposure_plus_1"},{name:"Advanced",avatar:"exposure_plus_2"}],mini_courses:[{title:"A Taste of Python for Experienced Developers",avatar_url:"./Python_color.png",tags:["Python","Introduction"],objectives:[{text:"Learn the basic language features (and syntax) of Python: Objects, Looping, Conditionals, List, Dictionaries, Functions",sublist:[]},{text:"Be able to use:",sublist:["The Python interpreter,","IPython as a more feature-full interpreter,","Jupyter as the next-generation of IPython,","and stand-alone python scripts."]},{text:"Be able to write simple Python scripts (e.g. to replace bash scripts or other simple scripts).",sublist:[]}]},{title:"The Python Ecosystem for Full-scale Apps",avatar_url:"./Python_color.png",tags:["Python","Introduction"],objectives:[{text:"Discover the broad Python ecosystem which facilitate building full-scale applications in Python, e.g.:",sublist:["`modules` and `packages`,","virtual environment,","testing frameworks,","application frameworks (for web and otherwise),","packaging systems, and","data science toolkits and the “PyData stack”."]}]},{title:"Python Looping Idioms",avatar_url:"./Python_color.png",tags:["Python","Intermediate"],objectives:[{text:"Apply the idiomatic ways to loop in Python: enumerate, zip, sorted, reversed, itertools.",sublist:[]},{text:"Build their own iterable objects (the `__iter__` and `__next__` methods).",sublist:[]},{text:"Use and build generators (functions that `yield`).",sublist:[]},{text:"Construct generator expressions and list comprehensions.",sublist:[]}]},{title:"Python Ideologies",avatar_url:"./Python_color.png",tags:["Python","Intermediate"],objectives:[{text:"Implement the most common coding conventions from both PEP8 and Google’s Python Style Guide.",sublist:[]},{text:"Demonstrate what it means to be “Pythonic”: The Python Manifesto, Coding with Intent, writing “Beautiful” code.",sublist:[]}]},{title:"Python Built-in Modules and Data Structures",avatar_url:"./Python_color.png",tags:["Python","Intermediate"],objectives:[{text:"Use and distinguish between the features of the `collections` built-in module: defaultdict, Counter, namedtuple, deque, etc.",sublist:[]},{text:"Call low-level OS function through the built-in `os` module.",sublist:[]},{text:"Read/write files with various formats: XML, JSON, CSV, MS Excel, SQLite, pickle.",sublist:[]},{text:"Manipulate strings and dates in Python.",sublist:[]}]},{title:"Python Functions: First-class Objects, Callbacks, Closures, and Decorators",avatar_url:"./Python_color.png",tags:["Python","Intermediate"],objectives:[{text:"Explain the significance of functions being first-class objects in Python.",sublist:[]},{text:"Pass functions as parameters to other functions (e.g. sort, pd.apply, etc.)",sublist:[]},{text:"Write function closures:",sublist:[]},{text:"Return new functions from another function.",sublist:[]},{text:"Construct and apply function decorators appropriately",sublist:[]},{text:"Explain the significance of decorators as a design pattern.",sublist:[]},{text:"Write code using Python’s decorator syntax (“syntactic sugar”).",sublist:[]}]},{title:"Python Classes and Inheritance for the Experienced Developer",avatar_url:"./Python_color.png",tags:["Python","Advanced"],objectives:[{text:"Utilize Python’s class syntax and scoping rules (not what you’d expect!)",sublist:[]},{text:"Explain the difference between statically-typed languages and dynamically-typed languages, and be able to articulate the pros and cons of each.",sublist:[]},{text:"Use Python’s dynamic typing system to write reusable functions (embrace “duck typing”).",sublist:[]},{text:"Utilize Python’s magic methods.",sublist:[]},{text:"Describe when inheritance makes sense in Python.",sublist:[]}]},{title:"Python Case Study: Write a DataFrame object using only Python builtins",avatar_url:"./Python_color.png",tags:["Python","Advanced"],objectives:[{text:"Case study requirements:",sublist:["Use only Python’s builtin modules, data structures and language features.","Build a `DataFrame` class (similar to Pandas, but with your own spin on things).","Use magic methods to create a flexible and readable interface.","Write documentation about what features your DataFrame supports, and what features it does not support."]}]},{title:"Packaging in Python for Internal and External Distribution",avatar_url:"./Conda.png",tags:["Python","Advanced"],objectives:[{text:"Learn the differences between `conda-forge` and `PyPI`.",sublist:[]},{text:"Learn how to use Conda to package Python for both internal and/or external distribution.",sublist:[]}]},{title:"Python C-extensions and the GIL",avatar_url:"./Python_color.png",tags:["Python","Advanced"],objectives:[{text:"Write, compile, and use a C-extension from scratch.",sublist:[]},{text:"Wrap, compile, and use an existing C-library.",sublist:[]},{text:"Articulate what the GIL is, why it exists, and how to parallelize code despite the GIL (i.e. how to release the GIL in your C-extension to allow parallelism).",sublist:[]}]},{title:"Scientific Computing in Python: Overview",avatar_url:"./pydata-logo.png",tags:["Data Science","Introduction"],objectives:[{text:"Utilize basic functionality of SciPy, NumPy, and Pandas.",sublist:[]},{text:"Describe the multitude of uses for SciPy.",sublist:[]},{text:"Describe NumPy n-dimensional arrays and why NumPy is groundbreaking.",sublist:[]},{text:"Explain the use and importance of DataFrames in Pandas.",sublist:[]},{text:"Articulate how StatsModels is used for … you guessed it, statistical models!",sublist:[]}]},{title:"Scientific Computing in Python: Fast Numeric Computation",avatar_url:"./pydata-logo.png",tags:["Data Science","Intermediate"],objectives:[{text:"Write vectorized operations in NumPy,",sublist:[]},{text:"Avoid and describe inefficient combinations of operations with NumPy,",sublist:[]},{text:"Explain distributed computation with Dask",sublist:[]},{text:"Describe in detail GPU computation with Numba.",sublist:[]}]},{title:"NumPy Full Tour",avatar_url:"./numpy-logo-300.png",tags:["Data Science","Intermediate"],objectives:[{text:"Explore the entire NumPy API (very quickly!) to obtain a solid understanding of its overall capabilities.",sublist:[]}]},{title:"Statistics with Python: Hypothesis Testing and Confidence Intervals",avatar_url:"./pydata-logo.png",tags:["Data Science","Introduction"],objectives:[{text:"Answer precisely the question “What actually is a p-value?”",sublist:[]},{text:"Apply the tenets of random sampling and hypothesis testing, and understand their strengths and weaknesses.",sublist:[]},{text:"Compute confidence intervals and understand how they relate to hypothesis testing.",sublist:[]},{text:"Calculate p-values, confidence intervals, and run hypothesis tests in Python with SciPy.",sublist:[]}]},{title:"Statistics with Python: Random Variables and Common Distributions",avatar_url:"./pydata-logo.png",tags:["Data Science","Intermediate"],objectives:[{text:"Define what a random variable is.",sublist:[]},{text:"Articulate the difference between continuous random variables and discrete random variables.",sublist:[]},{text:"Describe the the common probability distributions (normal, uniform, gamma, poison, bernoulli, binomial, etc).",sublist:[]},{text:"Compute PDFs, PMFs, CDFs, etc using Python with SciPy.",sublist:[]},{text:"Use statsmodels to do linear regression and regression analysis.",sublist:[]}]},{title:"Statistics with Python: Modern Methods",avatar_url:"./pydata-logo.png",tags:["Data Science","Advanced"],objectives:[{text:"Understand and apply Bootstrap Method",sublist:[]},{text:"Apply Bayesian statistics to datasets using Python",sublist:[]},{text:"Articulate “modern” statistical methods in Python",sublist:[]}]},{title:"Exploratory Data Analysis with Pandas: Basic Operations",avatar_url:"./pandas_logo.png",tags:["Data Science","Introduction"],objectives:[{text:"Read data into DataFrames from common formats: CSV, TSV, JSON, XML, HTML, HDF5, SAS, Excel",sublist:[]},{text:"Convert to the proper datatypes, and view summary statistics of a DataFrame.",sublist:[]},{text:"Filter data using Series objects, indexing, and boolean masks.",sublist:[]},{text:"Merge, append, and concatenate DataFrames.",sublist:[]},{text:"Export data to common formats: CSV, TSV, JSON, XML, HTML, HDF5, SAS, Excel",sublist:[]},{text:"Construct basic plots through Pandas.",sublist:[]}]},{title:"Exploratory Data Analysis with Pandas: Transformation and Aggregation",avatar_url:"./pandas_logo.png",tags:["Data Science","Intermediate"],objectives:[{text:"Transform data within DataFrames and Series using datetime and string transformations.",sublist:[]},{text:"Utilize group-by operations and workflow of aggregation, transformation, and filtration.",sublist:[]}]},{title:"Exploratory Data Analysis with Pandas: Optimizations, Multi-index, and Time Series",avatar_url:"./pandas_logo.png",tags:["Data Science","Advanced"],objectives:[{text:"Articulate why vectorized operations are fast and should always be used.",sublist:[]},{text:"Recognize and avoid n^2 operations which kill performance in Pandas.",sublist:[]},{text:"Demonstrate the intricacies of the multi-index DataFrames.",sublist:[]},{text:"Store time-series in Pandas applying date/time manipulation and resampling.",sublist:[]}]},{title:"Plotting in Python with Matplotlib and Convenience Layers",avatar_url:"./matplotlib-logo-300.png",tags:["Data Science","Introduction"],objectives:[{text:"Create plots in Matplotlib using two interfaces: global, OOP",sublist:[]},{text:"Use Seaborn as a convenience layer atop Matplotlib",sublist:[]},{text:"Construct plots using Pandas as another convenience layer",sublist:[]}]},{title:"Plotting in Python with Bokeh",avatar_url:"./bokeh-logo-300.png",tags:["Data Science","Intermediate"],objectives:[{text:"Explore the capabilities of the Bokeh plotting library.",sublist:[]},{text:"Use Bokeh to create interactive plots in Jupyter.",sublist:[]},{text:"Publish interactive plots to the web using Bokeh.",sublist:[]}]},{title:"Plotting in Python with Specialized Libraries",avatar_url:"./PyViz_logo_wm.png",tags:["Data Science","Advanced"],objectives:[{text:"Create plots using alternative plotting libraries:",sublist:["Datashader","GeoViews"]},{text:"Use PyViz as a high-level plotting library.",sublist:[]}]},{title:"Machine Learning Concepts: Core Concepts",avatar:"memory",tags:["AI / ML","Introduction"],objectives:[{text:"Differentiate between the three main subfields of Machine Learning, supervised, unsupervised, and reinforcement, through a hands-on approach",sublist:[]},{text:"Apply the fundamental methodology of Supervised Machine Learning (function estimation and model validation).",sublist:[]}]},{title:"Machine Learning Concepts: Simple Models",avatar:"memory",tags:["AI / ML","Intermediate"],objectives:[{text:"Work with several simple supervised ML models:",sublist:["Linear regression","kNN","Decision trees","Random Forests"]},{text:"Explore and run simple unsupervised ML models:",sublist:["K-means","Hierarchical clustering"]}]},{title:"Machine Learning Concepts: Complex Models",avatar:"memory",tags:["AI / ML","Advanced"],objectives:[{text:"Dive into more complex supervised ML models:",sublist:["Gradient Boosting (trees, specifically)","SVMs","Neural networks"]}]},{title:"Machine Learning in Python: Intro to Scikit-Learn",avatar_url:"./scikit-learn-logo-notext.png",tags:["AI / ML","Introduction"],objectives:[{text:"Intro to the capabilities of scikit-learn.",sublist:[]},{text:"Explore basic functionality of scikit-learn with a hands-on approach.",sublist:[]}]},{title:"Machine Learning in Python: Scikit-Learn's Pipelines and Grid Searching",avatar_url:"./scikit-learn-logo-notext.png",tags:["AI / ML","Intermediate"],objectives:[{text:"Use scikit-learn’s Pipelines and FeatureUnions to ensure proper reproducibility, validation methodology, and code reusability.",sublist:[]},{text:"Use grid searching with scikit-learn to find optimal models.",sublist:[]}]},{title:"Machine Learning in Python: Preprocessing and Meta-models with Scikit-Learn",avatar_url:"./scikit-learn-logo-notext.png",tags:["AI / ML","Advanced"],objectives:[{text:"Intro to preprocessing data and feature engineering (examples given of images, text, audio, and tabular).",sublist:[]},{text:"Intro to committees of models, and cascades of models.",sublist:[]}]},{title:"Machine Learning in Python: Intro to PyTorch",avatar_url:"./pytorch-logo.png",tags:["AI / ML","Introduction"],objectives:[{text:"Intro to the capabilities of PyTorch.",sublist:[]},{text:"Explore basic functionality of PyTorch hands-on.",sublist:[]}]},{title:"Webscraping with Python",avatar:"share",tags:["Other","Intermediate"],objectives:[{text:"Learn to parse HTML using BeautifulSoup.",sublist:[]},{text:"Learn to automate the web browser (for scraping purposes) using Selenium.",sublist:[]}]}]};t.selected_fields=t.field_options.map(function(t){return t.name}),t.selected_levels=t.level_options.map(function(t){return t.name});for(var e=0;e<t.mini_courses.length;e++)t.mini_courses[e].index=e;return t},computed:{active_courses:function(){for(var t=[],e=0;e<this.mini_courses.length;e++){var i=this.mini_courses[e].tags[0],a=this.mini_courses[e].tags[1];this.selected_fields.includes(i)&&this.selected_levels.includes(a)&&t.push(this.mini_courses[e])}return t}},methods:{remove_field:function(t){var e=this.selected_fields.indexOf(t.name);e>=0&&this.selected_fields.splice(e,1)},remove_level:function(t){var e=this.selected_levels.indexOf(t.name);e>=0&&this.selected_levels.splice(e,1)}}},s=(i(140),i(20)),n=Object(s.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",{attrs:{"justify-center":""}},[i("v-flex",{attrs:{xs12:"",sm12:"",md10:""}},[i("h2",{staticClass:"mt-3 mb-3"},[t._v("Course Filters")]),t._v(" "),i("v-autocomplete",{attrs:{items:t.field_options,chips:"",label:"Field of Study","item-text":"name","item-value":"name",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{staticClass:"chip--select-multi",attrs:{selected:e.selected,close:"",color:"primary",outline:""},on:{input:function(i){t.remove_field(e.item)}}},[i("v-avatar",[e.item.avatar?i("v-icon",[t._v(t._s(e.item.avatar))]):t._e(),t._v(" "),e.item.avatar_url?i("img",{attrs:{src:e.item.avatar_url}}):t._e()],1),t._v("\n          "+t._s(e.item.name)+"\n        ")],1)]}},{key:"item",fn:function(e){return["object"!=typeof e.item?[i("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]:[i("v-list-tile-avatar",[e.item.avatar?i("v-icon",[t._v(t._s(e.item.avatar))]):t._e(),t._v(" "),e.item.avatar_url?i("img",{attrs:{src:e.item.avatar_url}}):t._e()],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.name)}}),t._v(" "),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.item.group)}})],1)]]}}]),model:{value:t.selected_fields,callback:function(e){t.selected_fields=e},expression:"selected_fields"}}),t._v(" "),i("v-autocomplete",{attrs:{items:t.level_options,chips:"",label:"Level","item-text":"name","item-value":"name",multiple:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[i("v-chip",{staticClass:"chip--select-multi",attrs:{selected:e.selected,close:"",color:"primary",outline:""},on:{input:function(i){t.remove_level(e.item)}}},[i("v-avatar",[e.item.avatar?i("v-icon",[t._v(t._s(e.item.avatar))]):t._e(),t._v(" "),e.item.avatar_url?i("img",{attrs:{src:e.item.avatar_url}}):t._e()],1),t._v("\n          "+t._s(e.item.name)+"\n        ")],1)]}},{key:"item",fn:function(e){return["object"!=typeof e.item?[i("v-list-tile-content",{domProps:{textContent:t._s(e.item)}})]:[i("v-list-tile-avatar",[e.item.avatar?i("v-icon",[t._v(t._s(e.item.avatar))]):t._e(),t._v(" "),e.item.avatar_url?i("img",{attrs:{src:e.item.avatar_url}}):t._e()],1),t._v(" "),i("v-list-tile-content",[i("v-list-tile-title",{domProps:{innerHTML:t._s(e.item.name)}}),t._v(" "),i("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.item.group)}})],1)]]}}]),model:{value:t.selected_levels,callback:function(e){t.selected_levels=e},expression:"selected_levels"}}),t._v(" "),i("h2",{staticClass:"mt-3 mb-3"},[t._v("Course Listing")]),t._v(" "),i("v-expansion-panel",[i("transition-group",{attrs:{name:"list",tag:"v-expansion-panel"}},t._l(t.active_courses,function(e){return i("v-expansion-panel-content",{key:e.index},[i("v-layout",{attrs:{slot:"header","fill-height":""},slot:"header"},[i("v-avatar",{attrs:{size:"35",tile:!1}},[e.avatar?i("v-icon",[t._v(t._s(e.avatar))]):t._e(),t._v(" "),e.avatar_url?i("img",{attrs:{src:e.avatar_url}}):t._e()],1),t._v(" "),i("v-flex",{attrs:{"align-self-center":"","ml-2":""}},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),i("v-flex",{attrs:{"align-self-center":"",shrink:""}},t._l(e.tags,function(e,a){return i("v-chip",{key:a,attrs:{small:"",disabled:"",outline:""}},[t._v("\n              "+t._s(e)+"\n            ")])}),1)],1),t._v(" "),i("v-card",{staticClass:"darken-4",attrs:{dark:"",color:"blue"}},[i("v-card-text",t._l(e.objectives,function(e,a){return i("ul",{key:a},[i("li",[t._v(t._s(e.text))]),t._v(" "),t._l(e.sublist,function(a){return e.sublist?i("ul",[i("li",[t._v(t._s(a))])]):t._e()})],2)}),0)],1)],1)}),1)],1)],1)],1)},[],!1,null,null,null);n.options.__file="index.vue";e.default=n.exports}}]);