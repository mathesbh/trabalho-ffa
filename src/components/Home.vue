<template>
  <div>
    <NavBar :items="navbar"/>
    <div class="container">
    <div id="tarefaffa">

	<div id="contents">
      			
	<h2><u>  				
		Informações atuais abaixo: </a>  			
	</u></h2>  		

    <img src="https://s3.static.brasilescola.uol.com.br/be/2021/02/covid-19.jpg" width="320" height="205" />	
	<h3><u>Última atualização: 05/06/2021 - 09:00 </u></h3>  			
				
			
	 				
	<li>Confirmados: 16.720.081</li>
	<br>  				
	<li>Recuperados: 14.560.845</li>  	
    <br>
	<li>Óbitos: 10.000.234</li>  				
	<br>
	<li>População: 200.000.00</li>  				
	  		
	 	</div>  
		 
    <div id="menu">
    <h3><u>Casos por:</u></h3>  		
				
		<li>Estados Brasileiros</li><br>
        <input type="button" value="Acessar">			
			
	</div>  	

    </div>	
	</div>
  </div>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'Home',
  props: {

  },
  components: {
    NavBar
  },
  data(){
    return{
      navbar: {
        covid: 'Covid-19',
        title: 'Brasil'
      }    
    }
  },
}
</script>

<style scoped>
body  {  	
	margin: 0;  	
	padding: 0;  	
	background: rgb(221, 221, 221); 
    
 }
 
.container{

    max-width: 1000px;
    margin: 0 auto;

}

#container  {  

    display: flex;
    justify-content: center;
    font-size: 30px;	
	margin: 1em auto;  	
	width: 650px;  	
	background:rgb(227, 235, 230);  
	}  

#header {
    
    text-align: center;
    }  

#mainnav {
    font-size: 25px;
    text-align: center;
    background: rgb(247, 243, 246); 
    
}  

#tarefaffa{

    justify-content: space-evenly;
    margin: 50px;
    display:flex;
    align-items: center;
    
}
    
    
#menu  {  
    font-size: 18px;	
    padding: 50px;
    text-align: center;
	float: right; 	
	width: 165px;  	
	background: rgb(235, 250, 243);  
	} 

#contents  {  
    
    font-size: 18px;
    display:flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
	float: center;  	
	width: 440px;  	
	background: rgb(235, 250, 243);  	
	margin: 0 0 0 20px;  
	}

</style>