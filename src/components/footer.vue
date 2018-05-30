<template>
  <footer>
    <section class="email">
      <form class="email" action="">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email">
        <input id="submit" type="submit" value="Sign up">
      </form>
    </section>
    <section>
      <a href="#">Devon</a>
    </section>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  section {
    margin: 20px 0;
    padding: 20px;
    text-align: center;
    background: #f1ab86;
    font-weight: 100;
    input {
      border: 0;
      padding: 10px;
    }
    #submit {
      color: #fff;
      background: #28a745;
      cursor: pointer;
      border-radius: 5px;
    }
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 100px;
  }
}
</style>
