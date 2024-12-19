import React from "react";
import './Explore.css';
import Navbar from "../Home/Navbar/Navbar";
import img from "../../Asets/Plants_Tb.webp";
import { useLocation } from "react-router-dom";


const  Explore=()=>{
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const pridiction = params.get('pridiction'); // Access the prediction from URL

  console.log("Prediction 3: ", pridiction);

    return(
<div className="explore">
         <Navbar/> 
     <div className="hero-explore">
        
     {/* <h1>Prediction Class Info :  
     </h1><br /> */}

               <h1>Prediction Class Info : <span id="prdict"> {pridiction}</span></h1><br />
                          <select name="chose language" id="language">
                            <option value="Engils">English</option>
                            <option value="Hidi">Hindi</option>
                            <option value="Marathi">Marathi</option>
                          </select>
                          {pridiction === null &&(
                            <div id="null" >
                                <p> <h3>                              No data found
                                </h3></p>
                              </div>
                          )}
                            {pridiction === "Apple___Black_rot" && (
                                    <div id="Apple___Black_rot">
                                      <h3>Apple Black rot</h3>
                                      <p><strong>Introduction :</strong> Apple black rot is a fungal disease that affects apple trees, causing significant damage to both fruit and foliage. It is caused by the fungus <i>Botryosphaeria obtusa</i> and is prevalent in regions where apples are grown.</p>
                                      <p><strong>Symptoms :</strong> The symptoms of black rot appear on leaves, fruits, and branches of the apple tree. Initially, the leaves develop purple or dark brown spots, while infected fruits show circular, sunken lesions that gradually turn black. The branches may also show cankers, which can lead to dieback.</p>
                                      <p><strong>Causes :</strong> Black rot thrives in warm, humid environments. Poor orchard management, such as leaving fallen fruit on the ground or failing to prune dead wood, can increase the risk of an outbreak. Spores from the fungus spread through wind and rain.</p>

                                      <p><strong>Prevention and Control :</strong> Effective prevention of black rot includes maintaining proper orchard hygiene, regularly pruning dead or infected branches, and using fungicides as a preventive measure. Proper storage of harvested apples can also help reduce the spread of the disease.</p>
                                      <p><strong>Conclusion :</strong> Apple black rot is a serious fungal disease that can affect the yield and quality of apple production. By following good orchard practices and timely interventions, it is possible to minimize its impact.</p>

                                      
                                    </div>
                            )}
                          {pridiction === "Corn_(maize)___Northern_Leaf_Blight" && (
                                          <div id="Corn_(maize)___Northern_Leaf_Blight">
                                            <h3>Corn (Maize) Northern Leaf Blight</h3>
                                            <p><strong>Introduction :</strong> Northern Leaf Blight (NLB) is a fungal disease caused by <i>Setosphaeria turcica</i>. It primarily affects corn and maize crops, leading to significant yield losses in heavily infected fields.</p>
                                            <p><strong>Symptoms :</strong> The disease manifests as long, elliptical, gray-green or tan lesions on the leaves. As the disease progresses, the lesions expand and can cause the leaf tissue to die, leading to reduced photosynthesis and plant health.</p>
                                            <p><strong>Causes :</strong> NLB thrives in cool, wet conditions and is spread by spores through wind and rain. Continuous planting of susceptible corn varieties increases the risk of the disease.</p>

                                            <p><strong>Prevention and Control :</strong> Crop rotation and the use of resistant corn varieties are key preventive measures. Fungicides can be applied if conditions are favorable for disease development. Good field management practices, such as removing infected debris, can also reduce the risk of NLB.</p>
                                            <p><strong>Conclusion :</strong> Northern Leaf Blight can severely reduce corn yields if left unmanaged. Early detection and the use of resistant varieties, along with appropriate fungicide use, can mitigate its impact.</p>
                                          </div>
                            )}

                          {pridiction === "Potato___Early_blight" && (
                                          <div id="Potato___Early_blight">
                                            <h3>Potato Early Blight</h3>
                                            <p><strong>Introduction :</strong> Early blight of potatoes is caused by the fungus <i>Alternaria solani</i>. It primarily affects potato leaves, stems, and tubers, leading to a reduction in crop yield and quality.</p>
                                            <p><strong>Symptoms :</strong> The first symptoms are small, brown spots on older leaves. These spots enlarge, becoming concentric rings that give a "target spot" appearance. Severe infections can lead to defoliation, which reduces the plant’s ability to produce energy.</p>
                                            <p><strong>Causes :</strong> The fungus thrives in warm, humid weather and spreads via wind, water, and infected plant debris. The risk of early blight increases with stress factors such as drought, poor soil fertility, and damage to the plants.</p>

                                            <p><strong>Prevention and Control :</strong> Use of disease-free seed potatoes, crop rotation, and removal of infected debris are effective control measures. Fungicides can be used as a preventive treatment, especially in areas with high disease pressure.</p>
                                            <p><strong>Conclusion :</strong> Potato early blight can cause significant losses if not managed properly. By using resistant varieties and following good agricultural practices, the disease can be controlled effectively.</p>
                                          </div>
                            )}
                          {pridiction === "Tomato___Leaf_Mold" && (
                            <div id="Tomato___Leaf_Mold">
                              <h3>Tomato Leaf Mold</h3>
                              <p><strong>Introduction :</strong> Leaf mold is a fungal disease caused by <i>Passalora fulva</i> that affects tomato plants, primarily in humid greenhouse conditions. It causes reduced fruit quality and yield.</p>
                              <p><strong>Symptoms :</strong> Leaf mold typically starts as pale green or yellow spots on the upper side of leaves. On the underside, a fuzzy, olive-green or gray mold appears. Severely infected leaves may die and fall off, leading to defoliation.</p>
                              <p><strong>Causes :</strong> Leaf mold thrives in warm, humid environments, especially in greenhouses with poor ventilation. Spores are spread by air currents and water splashes.</p>

                              <p><strong>Prevention and Control :</strong> Improving ventilation in greenhouses and using resistant tomato varieties can help prevent the disease. Fungicides may also be used as a preventive measure, and affected leaves should be removed to slow down the spread.</p>
                              <p><strong>Conclusion :</strong> Tomato leaf mold can cause significant damage in greenhouses but can be managed with proper environmental controls and the use of resistant varieties.</p>
                            </div>
                          )}
                          {pridiction === "Apple___Cedar_apple_rust" && (
                            <div id="Apple___Cedar_apple_rust">
                              <h3>Apple Cedar Apple Rust</h3>
                              <p><strong>Introduction :</strong> Cedar apple rust is a fungal disease caused by <i>Gymnosporangium juniperi-virginianae</i>, which affects apple trees and requires both apple and cedar trees to complete its life cycle.</p>
                              <p><strong>Symptoms :</strong> Orange or yellow spots develop on the leaves, and later tube-like structures appear on the underside. Severe infections can cause premature leaf drop and reduce fruit production.</p>
                              <p><strong>Causes :</strong> Spores are produced on infected cedar trees and spread to apple trees through the wind, especially during wet conditions.</p>

                              <p><strong>Prevention and Control :</strong> Remove nearby cedar trees or apply fungicides early in the season to protect apple trees. Resistant apple varieties are available to reduce the impact of cedar apple rust.</p>
                              <p><strong>Conclusion :</strong> Cedar apple rust can cause significant damage to apple orchards, but it can be controlled with timely fungicide applications and orchard management practices.</p>
                            </div>
                          )}
                          {pridiction === "Apple___healthy" && (
                            <div id="Apple___healthy">
                              <h3>Healthy Apple</h3>
                              <p>The apple tree is healthy with no visible signs of disease or pest damage. Healthy apple trees exhibit robust growth, clean foliage, and good fruit yield.</p>
                              <p>To maintain the health of apple trees, ensure proper fertilization, pruning, and disease management throughout the growing season.</p>
                            </div>
                          )}
                          {pridiction === "Blueberry___healthy" && (
                            <div id="Blueberry___healthy">
                              <h3>Healthy Blueberry</h3>
                              <p>The blueberry plant is healthy with no visible signs of disease or pest damage. Healthy blueberry plants have vibrant green leaves, strong growth, and abundant fruit production.</p>
                              <p>Proper care, such as regular watering, mulching, and pest control, helps keep blueberry plants healthy and productive.</p>
                            </div>
                          )}
                          {pridiction === "Cherry_(including_sour)___Powdery_mildew" && (
                            <div id="Cherry_(including_sour)___Powdery_mildew">
                              <h3>Cherry Powdery Mildew</h3>
                              <p><strong>Introduction :</strong> Powdery mildew on cherries is caused by the fungus <i>Podosphaera clandestina</i>. It affects the foliage and fruit of both sweet and sour cherry trees.</p>
                              <p><strong>Symptoms :</strong> White, powdery growth appears on the leaves, shoots, and fruits. Infected leaves may curl, and fruit development can be stunted.</p>
                              <p><strong>Causes :</strong> Powdery mildew thrives in warm, dry conditions and spreads through spores carried by the wind.</p>

                              <p><strong>Prevention and Control :</strong> Prune trees to improve air circulation, and apply fungicides to prevent powdery mildew infection. Resistant varieties are available.</p>
                              <p><strong>Conclusion :</strong> Powdery mildew can reduce the health and productivity of cherry trees, but it can be managed with proper care and timely fungicide application.</p>
                            </div>
                          )}
                          {pridiction === "Cherry_(including_sour)___healthy" && (
                            <div id="Cherry_(including_sour)___healthy">
                              <h3>Healthy Cherry (Including Sour)</h3>
                              <p>The cherry tree is healthy with no visible signs of disease or pest damage. Healthy cherry trees exhibit strong growth, glossy green leaves, and high fruit production.</p>
                              <p>Regular pruning, fertilization, and proper disease management ensure the long-term health and productivity of cherry trees.</p>
                            </div>
                          )}
                          {pridiction === "Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot" && (
                            <div id="Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot">
                              <h3>Corn Cercospora Leaf Spot (Gray Leaf Spot)</h3>
                              <p><strong>Introduction :</strong> Gray leaf spot is a fungal disease caused by <i>Cercospora zeae-maydis</i> that affects corn plants, reducing yield potential.</p>
                              <p><strong>Symptoms :</strong> Long, narrow gray or tan lesions develop on leaves, eventually coalescing to form larger dead areas. Severe infections can result in leaf death and decreased photosynthesis.</p>
                              <p><strong>Causes :</strong> The fungus thrives in warm, humid environments and spreads through wind and rain-splashed spores.</p>

                              <p><strong>Prevention and Control :</strong> Use resistant corn varieties, rotate crops, and apply fungicides to manage gray leaf spot. Proper tillage can also reduce the presence of the fungus.</p>
                              <p><strong>Conclusion :</strong> Gray leaf spot can lead to significant yield loss if not managed, but good cultural practices and fungicide applications can help control its spread.</p>
                            </div>
                          )}
                          {pridiction === "Corn_(maize)___Common_rust_" && (
                            <div id="Corn_(maize)___Common_rust_">
                              <h3>Corn Common Rust</h3>
                              <p><strong>Introduction :</strong> Common rust in corn is caused by the fungus <i>Puccinia sorghi</i>. It primarily affects the leaves, reducing photosynthesis and plant vigor.</p>
                              <p><strong>Symptoms :</strong> Small, reddish-brown pustules appear on both leaf surfaces. As the infection progresses, the pustules burst, releasing spores.</p>
                              <p><strong>Causes :</strong> The fungus spreads through wind-borne spores, and cool, moist conditions favor its development.</p>

                              <p><strong>Prevention and Control :</strong> Plant resistant corn hybrids and apply fungicides if necessary. Crop rotation and removal of infected plant debris can help reduce the disease's spread.</p>
                              <p><strong>Conclusion :</strong> Common rust can weaken corn plants and reduce yield, but resistant varieties and proper crop management can minimize the impact.</p>
                            </div>
                          )}
                    
                          {pridiction === "Corn_(maize)___healthy" && (
                            <div id="Corn_(maize)___healthy">
                              <h3>Healthy Corn</h3>
                              <p>The corn plant is healthy with no visible signs of disease or pest damage. Healthy corn plants exhibit strong growth, vibrant green leaves, and high yield potential.</p>
                              <p>Proper crop management practices, such as crop rotation, timely planting, and good pest control, contribute to the health of corn plants.</p>
                            </div>
                          )}
                        {pridiction === "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot" && (
                          <div id="Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot">
                            <h3>Corn (Maize) Cercospora Leaf Spot and Gray Leaf Spot</h3>
                            <p><strong>Introduction :</strong> Cercospora leaf spot and gray leaf spot are fungal diseases that affect corn (maize) plants, often leading to significant yield losses.</p>
                            
                            <h4>Cercospora Leaf Spot</h4>
                            <p><strong>Symptoms :</strong> Cercospora leaf spot is characterized by round, tan to brown spots with dark borders on the leaves. The spots may become larger and coalesce, causing premature leaf death.</p>
                            <p><strong>Causes :</strong> The disease is caused by the fungus <i>Cercospora zeae-maydis</i> and thrives in warm, humid conditions. It spreads through airborne spores.</p>
                            
                            <h4>Gray Leaf Spot</h4>
                            <p><strong>Symptoms :</strong> Gray leaf spot causes rectangular, grayish lesions with dark brown edges on the leaves. The lesions can expand and coalesce, leading to significant leaf loss.</p>
                            <p><strong>Causes :</strong> The disease is caused by the fungus <i>Pyricularia grisea</i> and is favored by warm, wet conditions. It spreads through rain and wind.</p>

                            <p><strong>Prevention and Control :</strong> To manage both diseases, use resistant corn varieties, apply fungicides, and practice crop rotation. Maintain good field sanitation and avoid excessive moisture.</p>
                            <p><strong>Conclusion :</strong> Cercospora leaf spot and gray leaf spot can severely impact corn yields and quality, but effective management practices can help reduce their impact.</p>
                          </div>
                        )}

                          {pridiction === "Grape___Black_rot" && (
                            <div id="Grape___Black_rot">
                              <h3>Grape Black Rot</h3>
                              <p><strong>Introduction :</strong> Grape black rot is a fungal disease caused by <i>Guignardia bidwellii</i>, which affects grapevines and can significantly reduce grape yield if untreated.</p>
                              <p><strong>Symptoms :</strong> The disease starts as small, dark spots on leaves and fruit. Infected berries turn black, shrivel, and mummify. In severe cases, it can lead to complete crop loss.</p>
                              <p><strong>Causes :</strong> Black rot develops in warm, humid conditions and is spread by rain-splashed spores from infected plant debris. Overcrowded vineyards with poor air circulation are at higher risk.</p>

                              <p><strong>Prevention and Control :</strong> Pruning grapevines to improve airflow and sunlight penetration can help reduce disease incidence. Fungicide sprays are effective in controlling black rot. Removing infected berries and leaves also limits the spread.</p>
                              <p><strong>Conclusion :</strong> Grape black rot is a serious threat to grape production, but with proper vineyard management and fungicide use, its impact can be minimized.</p>
                            </div>
                          )}
                           {pridiction === "Grape___Esca_(Black_Measles)" && (
                                        <div id="Grape___Esca_(Black_Measles)">
                                          <h3>Grape Esca (Black Measles)</h3>
                                          <p><strong>Introduction :</strong> Esca, also known as black measles, is a fungal disease that affects grapevines, caused by a complex of fungi, including <i>Phaeomoniella chlamydospora</i> and <i>Togninia minima</i>.</p>
                                          <p><strong>Symptoms :</strong> The disease causes black spots on the leaves, and the grapes themselves may shrivel and develop dark, sunken lesions. Leaves can also turn yellow with brown spots.</p>
                                          <p><strong>Causes :</strong> The fungi live in the wood of grapevines, and symptoms appear more often in older vines. It thrives in warm, dry conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Prune infected wood and apply fungicides. Avoid wounding vines during pruning, as the fungi enter through open wounds.</p>
                                          <p><strong>Conclusion :</strong> Esca can significantly reduce grape yield and quality, but proper pruning and fungicide use can help manage the disease.</p>
                                        </div>
                             )}
                            {pridiction === "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)" && (
                                        <div id="Grape___Leaf_blight_(Isariopsis_Leaf_Spot)">
                                          <h3>Grape Leaf Blight (Isariopsis Leaf Spot)</h3>
                                          <p><strong>Introduction :</strong> Isariopsis leaf spot is a fungal disease caused by <i>Isariopsis griseola</i> affecting grapevines. It leads to significant leaf damage.</p>
                                          <p><strong>Symptoms :</strong> Round, dark spots with a yellow halo appear on the leaves. The spots can coalesce, causing large areas of leaf blight.</p>
                                          <p><strong>Causes :</strong> The fungus spreads through wind and rain, and it thrives in warm, humid conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Improve air circulation, avoid overhead irrigation, and apply fungicides as needed. Remove and destroy infected plant material.</p>
                                          <p><strong>Conclusion :</strong> Leaf blight can reduce grape yield and quality, but proper vineyard management and fungicide application can help control the disease.</p>
                                        </div>
                            )}
                            {pridiction === "Grape___healthy" && (
                                        <div id="Grape___healthy">
                                          <h3>Healthy Grape</h3>
                                          <p>The grapevine is healthy with no visible signs of disease or pest damage. Healthy grapevines exhibit strong growth, vibrant green leaves, and good fruit development.</p>
                                          <p>Maintaining proper vineyard practices, including regular pruning, pest control, and irrigation, helps ensure the health and productivity of grapevines.</p>
                                        </div>
                                      )}
                                      {pridiction === "Orange___Haunglongbing_(Citrus_greening)" && (
                                        <div id="Orange___Haunglongbing_(Citrus_greening)">
                                          <h3>Orange Huanglongbing (Citrus Greening)</h3>
                                          <p><strong>Introduction :</strong> Huanglongbing (HLB), or citrus greening, is a severe disease caused by the bacterium <i>Candidatus Liberibacter spp.</i> It affects citrus trees, including oranges.</p>
                                          <p><strong>Symptoms :</strong> Infected trees show yellowing of leaves, poor fruit development, and misshapen fruit with a bitter taste. The disease leads to tree decline and death.</p>
                                          <p><strong>Causes :</strong> The disease is spread by the Asian citrus psyllid, which transmits the bacteria from infected to healthy trees.</p>

                                          <p><strong>Prevention and Control :</strong> Control psyllid populations using insecticides and remove infected trees. Plant resistant varieties and maintain good orchard hygiene.</p>
                                          <p><strong>Conclusion :</strong> Citrus greening poses a significant threat to orange production, but proactive management and control measures can help reduce its impact.</p>
                                        </div>
                                      )}
                                      {pridiction === "Peach___Bacterial_spot" && (
                                        <div id="Peach___Bacterial_spot">
                                          <h3>Peach Bacterial Spot</h3>
                                          <p><strong>Introduction :</strong> Bacterial spot is a disease caused by the bacterium <i>Xanthomonas arboricola</i> that affects peach trees, leading to significant fruit and leaf damage.</p>
                                          <p><strong>Symptoms :</strong> Small, dark, sunken lesions appear on leaves, fruit, and twigs. Infected fruit may show pitting and rot.</p>
                                          <p><strong>Causes :</strong> The bacterium spreads through rain and wind, and it thrives in warm, wet conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply bactericides, and practice good orchard hygiene. Avoid overhead irrigation to reduce disease spread.</p>
                                          <p><strong>Conclusion :</strong> Bacterial spot can severely affect peach quality and yield, but effective management strategies can help control its spread.</p>
                                        </div>
                                      )}
                                      {pridiction === "Peach___healthy" && (
                                        <div id="Peach___healthy">
                                          <h3>Healthy Peach</h3>
                                          <p>The peach tree is healthy with no visible signs of disease or pest damage. Healthy peach trees exhibit robust growth, clean foliage, and good fruit production.</p>
                                          <p>Proper care, including fertilization, pruning, and pest control, is essential for maintaining the health of peach trees.</p>
                                        </div>
                                      )}
                                      {pridiction === "Pepper,_bell___Bacterial_spot" && (
                                        <div id="Pepper,_bell___Bacterial_spot">
                                          <h3>Bell Pepper Bacterial Spot</h3>
                                          <p><strong>Introduction :</strong> Bacterial spot in bell peppers is caused by <i>Xanthomonas campestris</i>, leading to significant leaf and fruit damage.</p>
                                          <p><strong>Symptoms :</strong> Dark, water-soaked lesions appear on the leaves, which can lead to leaf drop. Infected fruit shows dark, sunken spots.</p>
                                          <p><strong>Causes :</strong> The bacteria spread through rain, wind, and contaminated tools. It thrives in warm, wet conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply bactericides, and maintain good field hygiene. Avoid overhead watering to reduce disease spread.</p>
                                          <p><strong>Conclusion :</strong> Bacterial spot can reduce the quality and yield of bell peppers, but effective control measures can help manage the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Pepper,_bell___healthy" && (
                                        <div id="Pepper,_bell___healthy">
                                          <h3>Healthy Bell Pepper</h3>
                                          <p>The bell pepper plant is healthy with no visible signs of disease or pest damage. Healthy bell peppers have vibrant green leaves and produce high-quality fruit.</p>
                                          <p>Regular care, including proper irrigation, pest management, and fertilization, is essential for maintaining the health and productivity of bell pepper plants.</p>
                                        </div>
                                      )}
                                      {pridiction === "Potato___Early_blight" && (
                                        <div id="Potato___Early_blight">
                                          <h3>Potato Early Blight</h3>
                                          <p><strong>Introduction :</strong> Early blight is a fungal disease caused by <i>Alternaria solani</i> that affects potato plants, leading to significant yield loss.</p>
                                          <p><strong>Symptoms :</strong> Dark, concentric lesions with yellow halos appear on leaves, stems, and tubers. The disease can cause premature leaf drop and reduced tuber quality.</p>
                                          <p><strong>Causes :</strong> Spores are spread through rain and wind, and the disease thrives in warm, humid conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Rotate crops, use resistant varieties, and apply fungicides as needed. Proper field sanitation helps reduce the disease's impact.</p>
                                          <p><strong>Conclusion :</strong> Early blight can significantly affect potato yield and quality, but proper management practices and fungicide applications can help control the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Potato___Late_blight" && (
                                        <div id="Potato___Late_blight">
                                          <h3>Potato Late Blight</h3>
                                          <p><strong>Introduction :</strong> Late blight is a severe fungal disease caused by <i>Phytophthora infestans</i> that affects potato crops, often leading to devastating losses.</p>
                                          <p><strong>Symptoms :</strong> The disease causes dark, water-soaked lesions on leaves and stems, which can rapidly expand. Infected tubers develop dark, firm rots, and the disease can cause rapid plant death.</p>
                                          <p><strong>Causes :</strong> The fungus thrives in cool, wet conditions and spreads through spores carried by wind and rain.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply fungicides regularly, and practice crop rotation. Remove infected plants promptly and manage moisture levels to reduce disease spread.</p>
                                          <p><strong>Conclusion :</strong> Late blight is a major threat to potato crops, but timely interventions and proper management can help mitigate its impact.</p>
                                        </div>
                                      )}

                                      {pridiction === "Potato___healthy" && (
                                        <div id="Potato___healthy">
                                          <h3>Healthy Potato</h3>
                                          <p>The potato plant is healthy with no visible signs of disease or pest damage. Healthy potato plants exhibit strong growth, vibrant green leaves, and high-quality tuber development.</p>
                                          <p>Regular care, including appropriate irrigation, pest management, and proper fertilization, is essential for maintaining healthy potato plants and ensuring a good yield.</p>
                                        </div>
                                      )}
                                      {pridiction === "Raspberry___healthy" && (
                                        <div id="Raspberry___healthy">
                                          <h3>Healthy Raspberry</h3>
                                          <p>The raspberry plant is healthy with no visible signs of disease or pest damage. Healthy raspberry plants show robust growth, green foliage, and good fruit production.</p>
                                          <p>Proper care, including adequate watering, pest control, and appropriate pruning, is important for maintaining the health and productivity of raspberry plants.</p>
                                        </div>
                                      )}
                                      {pridiction === "Soybean___healthy" && (
                                        <div id="Soybean___healthy">
                                          <h3>Healthy Soybean</h3>
                                          <p>The soybean plant is healthy with no visible signs of disease or pest damage. Healthy soybean plants have vigorous growth, green leaves, and good pod development.</p>
                                          <p>Regular management practices, including proper fertilization, pest control, and irrigation, are crucial for maintaining the health and yield of soybean crops.</p>
                                        </div>
                                      )}
                                      {pridiction === "Squash___Powdery_mildew" && (
                                        <div id="Squash___Powdery_mildew">
                                          <h3>Squash Powdery Mildew</h3>
                                          <p><strong>Introduction :</strong> Powdery mildew is a fungal disease caused by <i>Podosphaera xanthii</i> that affects squash plants, leading to reduced crop yield and quality.</p>
                                          <p><strong>Symptoms :</strong> The disease is characterized by white, powdery fungal growth on the leaves, stems, and fruit. Infected plants may show leaf distortion and reduced fruit production.</p>
                                          <p><strong>Causes :</strong> Powdery mildew thrives in warm, dry conditions and spreads through airborne spores.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply fungicides, and manage plant spacing to improve air circulation. Remove and destroy infected plant debris.</p>
                                          <p><strong>Conclusion :</strong> Powdery mildew can significantly impact squash crops, but effective management practices can help control the disease and protect the yield.</p>
                                        </div>
                                      )}
                                      {pridiction === "Strawberry___Leaf_scorch" && (
                                        <div id="Strawberry___Leaf_scorch">
                                          <h3>Strawberry Leaf Scorch</h3>
                                          <p><strong>Introduction :</strong> Leaf scorch is a condition affecting strawberry plants, often caused by environmental stress or pathogens. It leads to the browning and scorching of leaves.</p>
                                          <p><strong>Symptoms :</strong> Leaves develop brown, scorched edges and may curl or drop prematurely. The condition can reduce the overall health and fruit production of the plant.</p>
                                          <p><strong>Causes :</strong> Factors such as excessive heat, drought, or fungal infections can cause leaf scorch in strawberries.</p>

                                          <p><strong>Prevention and Control :</strong> Provide adequate irrigation, ensure proper plant spacing, and apply fungicides if needed. Manage environmental stressors to reduce the risk of leaf scorch.</p>
                                          <p><strong>Conclusion :</strong> Leaf scorch can affect strawberry yield and quality, but proper management practices can help mitigate its impact.</p>
                                        </div>
                                      )}
                                      {pridiction === "Strawberry___healthy" && (
                                        <div id="Strawberry___healthy">
                                          <h3>Healthy Strawberry</h3>
                                          <p>The strawberry plant is healthy with no visible signs of disease or pest damage. Healthy strawberry plants have lush green leaves, robust growth, and good fruit production.</p>
                                          <p>Regular care, including proper watering, pest control, and adequate nutrition, is essential for maintaining the health and productivity of strawberry plants.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___Bacterial_spot" && (
                                        <div id="Tomato___Bacterial_spot">
                                          <h3>Tomato Bacterial Spot</h3>
                                          <p><strong>Introduction :</strong> Bacterial spot is a disease caused by <i>Xanthomonas perforans</i> affecting tomato plants. It can cause significant damage to both leaves and fruit.</p>
                                          <p><strong>Symptoms :</strong> The disease causes dark, water-soaked spots on leaves and fruit, which can lead to premature leaf drop and poor fruit quality.</p>
                                          <p><strong>Causes :</strong> Bacteria spread through rain, wind, and contaminated tools, thriving in warm, moist conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply bactericides, and practice crop rotation. Maintain good field sanitation and avoid overhead irrigation.</p>
                                          <p><strong>Conclusion :</strong> Bacterial spot can severely affect tomato yield and quality, but effective management practices can help control the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___Early_blight" && (
                                        <div id="Tomato___Early_blight">
                                          <h3>Tomato Early Blight</h3>
                                          <p><strong>Introduction :</strong> Early blight is a fungal disease caused by <i>Alternaria solani</i> that affects tomato plants, leading to significant damage.</p>
                                          <p><strong>Symptoms :</strong> Dark, concentric lesions with yellow halos appear on leaves, stems, and fruit. The disease can cause early defoliation and reduced fruit quality.</p>
                                          <p><strong>Causes :</strong> The fungus spreads through wind and rain and thrives in warm, humid conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply fungicides, and practice good field sanitation. Rotate crops and manage moisture levels to reduce disease spread.</p>
                                          <p><strong>Conclusion :</strong> Early blight can significantly affect tomato crops, but timely management and fungicide applications can help control the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___Target_Spot" && (
                                        <div id="Tomato___Target_Spot">
                                          <h3>Tomato Target Spot</h3>
                                          <p><strong>Introduction :</strong> Target spot is a fungal disease caused by <i>Corynespora cassiicola</i> that affects tomato plants, resulting in significant damage.</p>
                                          <p><strong>Symptoms :</strong> The disease causes dark, circular spots with concentric rings on leaves, which may lead to premature leaf drop. It can also affect fruit, causing sunken lesions.</p>
                                          <p><strong>Causes :</strong> Target spot thrives in warm, humid conditions and spreads through wind, rain, and contaminated equipment.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant varieties, apply fungicides, and ensure proper crop rotation. Maintain good field sanitation and avoid overhead irrigation.</p>
                                          <p><strong>Conclusion :</strong> Target spot can impact tomato yields and quality, but effective management practices can help control the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___Tomato_Yellow_Leaf_Curl_Virus" && (
                                        <div id="Tomato___Tomato_Yellow_Leaf_Curl_Virus">
                                          <h3>Tomato Yellow Leaf Curl Virus (TYLCV)</h3>
                                          <p><strong>Introduction :</strong> Tomato Yellow Leaf Curl Virus is a viral disease transmitted by whiteflies that affects tomato plants, leading to significant yield losses.</p>
                                          <p><strong>Symptoms :</strong> The disease causes yellowing of leaves, curling, and stunted growth. Infected plants may also show reduced fruit set and poor fruit quality.</p>
                                          <p><strong>Causes :</strong> The virus is transmitted by whiteflies and thrives in warm, dry conditions.</p>

                                          <p><strong>Prevention and Control :</strong> Use resistant tomato varieties, manage whitefly populations, and apply insecticides if needed. Practice crop rotation and avoid planting in areas with a history of the virus.</p>
                                          <p><strong>Conclusion :</strong> Tomato Yellow Leaf Curl Virus can severely affect tomato production, but proper management and control measures can help reduce its impact.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___Tomato_mosaic_virus" && (
                                        <div id="Tomato___Tomato_mosaic_virus">
                                          <h3>Tomato Mosaic Virus (ToMV)</h3>
                                          <p><strong>Introduction :</strong> Tomato Mosaic Virus is a viral disease that affects tomato plants, leading to various symptoms and reduced yield.</p>
                                          <p><strong>Symptoms :</strong> The virus causes mottling and mosaic patterns on leaves, leaf curling, and stunted growth. Infected plants may also exhibit poor fruit quality.</p>
                                          <p><strong>Causes :</strong> The virus is spread through contact with infected plant material and contaminated tools.</p>

                                          <p><strong>Prevention and Control :</strong> Use virus-free seeds, practice good sanitation, and avoid working with infected plants. Regularly clean tools and equipment to prevent virus spread.</p>
                                          <p><strong>Conclusion :</strong> Tomato Mosaic Virus can impact tomato yield and quality, but effective control measures and good practices can help manage the disease.</p>
                                        </div>
                                      )}
                                      {pridiction === "Tomato___healthy" && (
                                        <div id="Tomato___healthy">
                                          <h3>Healthy Tomato</h3>
                                          <p>The tomato plant is healthy with no visible signs of disease or pest damage. Healthy tomato plants exhibit strong growth, vibrant green leaves, and good fruit production.</p>
                                          <p>Regular care, including appropriate irrigation, pest management, and proper fertilization, is essential for maintaining healthy tomato plants and ensuring a good yield.</p>
                                        </div>
                                      )}



                          {pridiction === "Strawberry___Leaf_scorch" && (
                            <div id="Strawberry___Leaf_scorch">
                              <h3>Strawberry Leaf Scorch</h3>
                              <p><strong>Introduction :</strong> Leaf scorch in strawberries is caused by the fungus <i>Diplocarpon earliana</i>. It primarily affects the leaves of strawberry plants, reducing plant vigor and fruit production.</p>
                              <p><strong>Symptoms :</strong> Small, dark purple spots appear on leaves, which expand to form irregular brown areas. Infected leaves may eventually dry out, giving a scorched appearance. Severe infections can lead to reduced fruit yield.</p>
                              <p><strong>Causes :</strong> The fungus thrives in warm, humid conditions and spreads via splashed water or wind. Poor air circulation and overcrowded plants contribute to the disease's spread.</p>

                              <p><strong>Prevention and Control :</strong> Avoid overhead irrigation and space plants properly to improve air circulation. Fungicides can be applied as a preventive measure, and removing infected plant debris can help reduce disease spread.</p>
                              <p><strong>Conclusion :</strong> Strawberry leaf scorch can impact fruit production, but good agricultural practices and preventive fungicide applications can control the disease effectively.</p>
                            </div>
                          )}
                          {pridiction === "Strawberry___healthy" && (
                            <div id="Strawberry___healthy">
                              <h3>Healthy Strawberry</h3>
                              <p>The strawberry plant is healthy with no visible signs of disease or pest damage. Healthy plants exhibit lush green foliage, strong growth, and a productive fruit yield.</p>
                              <p>To maintain healthy strawberry plants, ensure proper watering, regular fertilization, and appropriate pest and disease management. Regular monitoring of the plants helps catch any early signs of issues.</p>
                            </div>
                          )}
                          {pridiction === "Tomato___Bacterial_spot" && (
                            <div id="Tomato___Bacterial_spot">
                              <h3>Tomato Bacterial Spot</h3>
                              <p><strong>Introduction :</strong> Bacterial spot in tomatoes is caused by several species of the bacterium <i>Xanthomonas</i>. It affects both the foliage and the fruit of tomato plants, leading to yield losses.</p>
                              <p><strong>Symptoms :</strong> Small, water-soaked spots appear on leaves, which later become dark and greasy-looking. Fruit can develop similar spots, rendering them unmarketable. In severe cases, defoliation occurs, exposing the fruit to sunscald.</p>
                              <p><strong>Causes :</strong> The bacteria spread through water splash, infected seeds, and contaminated tools. Warm, wet conditions favor the disease's development.</p>

                              <p><strong>Prevention and Control :</strong> Use disease-free seeds, practice crop rotation, and avoid overhead irrigation to reduce spread. Copper-based bactericides may help in managing bacterial spot.</p>
                              <p><strong>Conclusion :</strong> Bacterial spot can be difficult to control once established, but good management practices can help limit the spread and impact on tomato crops.</p>
                            </div>
                          )}
                          {pridiction === "Tomato___Early_blight" && (
                            <div id="Tomato___Early_blight">
                              <h3>Tomato Early Blight</h3>
                              <p><strong>Introduction :</strong> Early blight is a common fungal disease caused by <i>Alternaria solani</i>, affecting tomatoes and potatoes. It typically attacks older leaves first.</p>
                              <p><strong>Symptoms :</strong> Small brown spots with concentric rings appear on older leaves. As the disease progresses, it causes the leaves to yellow and drop off. Severe infections can reduce fruit yield and size.</p>
                              <p><strong>Causes :</strong> Warm, wet conditions favor the spread of the early blight fungus. It spreads through infected plant debris, water splashes, and wind.</p>

                              <p><strong>Prevention and Control :</strong> Rotate crops, remove infected debris, and apply fungicides if needed. Resistant tomato varieties are available to reduce the impact of early blight.</p>
                              <p><strong>Conclusion :</strong> Early blight can lead to significant yield loss if untreated. Good management practices and resistant varieties are key to controlling the disease.</p>
                            </div>
                          )}
                          {pridiction === "Tomato___Late_blight" && (
                            <div id="Tomato___Late_blight">
                              <h3>Tomato Late Blight</h3>
                              <p><strong>Introduction :</strong> Late blight, caused by <i>Phytophthora infestans</i>, is a devastating disease of tomatoes and potatoes. It spreads quickly under cool, wet conditions.</p>
                              <p><strong>Symptoms :</strong> Large, water-soaked lesions appear on leaves, stems, and fruit. The lesions may turn dark and spread rapidly, often leading to plant death. Fruit can rot both in the field and in storage.</p>
                              <p><strong>Causes :</strong> Late blight spreads through wind-borne spores, rain, and contaminated soil. It thrives in cool, wet weather conditions.</p>

                              <p><strong>Prevention and Control :</strong> Use resistant varieties, apply fungicides, and remove infected plants immediately to slow the spread. Avoid planting tomatoes near infected potato fields.</p>
                              <p><strong>Conclusion :</strong> Late blight can cause severe damage if left unmanaged, but preventive fungicide treatments and proper sanitation practices can reduce the risk.</p>
                            </div>
                          )}
                          {pridiction === "Tomato___Leaf_Mold" && (
                            <div id="Tomato___Leaf_Mold">
                              <h3>Tomato Leaf Mold</h3>
                              <p><strong>Introduction :</strong> Leaf mold is a fungal disease caused by <i>Passalora fulva</i> that primarily affects tomato plants in humid greenhouse conditions.</p>
                              <p><strong>Symptoms :</strong> Yellow spots appear on the upper leaf surfaces, with mold growth on the underside. As the disease progresses, the infected leaves may turn brown and fall off.</p>
                              <p><strong>Causes :</strong> The fungus thrives in high humidity and spreads via spores, especially in greenhouses with poor ventilation.</p>

                              <p><strong>Prevention and Control :</strong> Ensure proper ventilation in greenhouses, use resistant varieties, and apply fungicides if needed. Remove infected leaves to slow the spread.</p>
                              <p><strong>Conclusion :</strong> Leaf mold can cause significant damage to tomato plants, especially in enclosed environments, but can be managed with environmental controls and fungicides.</p>
                            </div>
                          )}
                          {pridiction === "Tomato___Septoria_leaf_spot" && (
                            <div id="Tomato___Septoria_leaf_spot">
                              <h3>Tomato Septoria Leaf Spot</h3>
                              <p><strong>Introduction :</strong> Septoria leaf spot is a fungal disease caused by <i>Septoria lycopersici</i> that affects tomato plants, reducing foliage and yield.</p>
                              <p><strong>Symptoms :</strong> Small, circular spots with dark borders appear on the leaves. As the spots grow, the leaves yellow and drop, weakening the plant.</p>
                              <p><strong>Causes :</strong> The fungus spreads through water splashes and wind. Wet weather and poor air circulation promote the disease.</p>

                              <p><strong>Prevention and Control :</strong> Use disease-resistant varieties, ensure proper spacing between plants for good air circulation, and apply fungicides if necessary.</p>
                              <p><strong>Conclusion :</strong> Septoria leaf spot can cause significant yield loss if left unchecked. Early detection and proper plant management can minimize the impact of the disease.</p>
                            </div>
                          )}
                         
     
       
           <hr />
           <br />
           <div>
          <h1>Construction of deep learning-based leaf disease detection model in plants.</h1><br />
          <hr />
          <br />
          <h1>Abstract</h1>
          <br />
          <p>
            Accurately detecting disease occurrences of crops in early stage is essential for quality and yield of crops through the decision of an appropriate treatments. However, detection of disease needs specialized knowledge and long-term experiences in plant pathology. Thus, an automated system for disease detecting in crops will play an important role in agriculture by constructing early detection system of disease. To develop this system, construction of a stepwise disease detection model using images of diseased-healthy plant pairs and a CNN algorithm consisting of five pre-trained models. The disease detection model consists of three step classification models, crop classification, disease detection, and disease classification. The ‘unknown’ is added into categories to generalize the model for wide application. In the validation test, the disease detection model classified crops and disease types with high accuracy (97.09%). The low accuracy of non-model crops was improved by adding these crops to the training dataset implicating expendability of the model. Our model has the potential to apply to smart farming of Solanaceae crops and will be widely used by adding more various crops as training dataset.
          </p><br />
          <hr />
          <br />
          <h1>Introduction</h1>
          <br />
          <p>Crop disease management is important in agriculture to increase yield and quality by reducing the economic and aesthetic damage caused by plant diseases. Although research into the causes and effective treatments for crop diseases is actively underway, monitoring plant health and early detection of pathogens are critical to reduce disease spread and facilitate effective management1. Detecting and protecting crops from pathogens is labor-intensive and time-consuming, making it virtually impossible for humans to analyze each plant2. Therefore, research on combining and applying new technologies to efficiently detect diseases has been conducted, and recently, research on detecting plant diseases in leaves using artificial intelligence (AI) is in progress3. Continued development of improved classification models, such as disease detection, or plant health monitoring, may enable AI-supported decision-making systems for smart agriculture4. Various studies have been carried out to apply deep learning algorithms more precisely to disease detection, such as applying newly developed architectures5,6, automatically detecting and classifying lesions in plant images7, or conducting research on preprocessing methods for incomplete images8 for practical use.</p>
          <br />
          <hr />
          <br />
          <h1>Dataset</h1>
          <p>The PlantVillage dataset is a large, publicly available dataset created to assist in the detection of plant diseases. It was originally developed as part of a project aimed at improving agricultural productivity by providing a tool for early disease diagnosis in crops. This dataset contains over 50,000 images of healthy and diseased plant leaves, covering 38 different plant classes, including crops like tomatoes, apples, corn, potatoes, and more.</p>
          <br />
          <p>Each image in the dataset is labeled with the corresponding plant species and the type of disease (if present). The dataset includes a variety of diseases such as bacterial spots, powdery mildew, early blight, and rust, among others. The images are diverse, taken under different lighting conditions, angles, and environments, ensuring a robust dataset for training machine learning models.</p>
          <br/>
          <hr />
          <h1> 
          Result
          </h1>
          <br />
          <h3>Leaf detection and classification using leaf images</h3><br />
            <p>  Plant Leaf Disease Detection system, the trained model successfully predicted plant health with a high degree of accuracy. The model, based on MobileNet, was evaluated using the PlantVillage dataset, achieving an accuracy of over 90% in detecting various diseases. The prediction process involves uploading a leaf image, which is processed by the backend server, and the classification results are displayed on the frontend.</p>
            <p>The model is capable of identifying diseases such as early blight, bacterial spot, and powdery mildew, along with healthy leaves. The predictions are fast, and the system provides a confidence score for each classification, ensuring transparency in the results. Additionally, the system allows users to view previously uploaded images and their corresponding predictions from the MySQL database. This ensures an intuitive and effective user experience for real-time plant disease detection.</p>
           <br />
           <img src= {img} alt="img-result" className="img-resutl" />
           <br />
           <hr />
           <br /><br />
           <a href="https://www.nature.com/articles/s41598-023-34549-2" id="click-mi"> Click mi For more details...</a>
           </div>
         </div>
        
    </div>
    )
}
export default Explore;