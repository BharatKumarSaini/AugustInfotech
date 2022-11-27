// . Set a border for <img> elements that have a title attribute that contains the word
// blue. [1 mark]
 <style>
 img [title~="blue"] {
 border: 5px solid red;
}
 </style>

 <body>
   <img src="klematis.jpg" title="blue flower">
   <img src="klematis2.jpg" title="purple flowers">
  <img src="klematis3.jpg" title="two blue flowers">  
</body>
