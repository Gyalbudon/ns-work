<?php
require_once(__DIR__ . '/config/config.php');
$app = new Monaka\Confirmation();
$app->run($adminMail, $ext_denied, $EXT_ALLOWS, $maxmemory, $max, $_SERVER["CONTENT_LENGTH"]);
?>
@@include('@@webRoot/parts/header2.html')

    <main>
        <section class="section-inquiry confirmation-page" id="area-7">
			<div class="heading-primary --sub">
				<div class="container">
					<h2 class="heading-primary__text">お問合せ・確認画面</h2>
				</div>
			</div>
            <div class="container">
                <?php if (!empty($_SESSION["submitContent"]) && empty($app->seriousError)) : ?>
                <form action="send.php" method="post" enctype="multipart/form-data" class="inquiry-form">
                    <h3 class="inquiry-form__title">
                    以下の内容で間違いがなければ、<br class="d-md-none">｢この内容で送信｣ボタンを押してください｡
                    </h3>
                    <?php foreach ($_SESSION["submitContent"] as $key => $value) : if($key == "広告情報"){continue;} ?>
                    <div class="form-group row">
                        <div class="col-12 col-sm-6">
                            <p class="inquiry-form__label text-left text-sm-right">
                                <?php echo h($key); ?>
                            </p>
                        </div>
                        <div class="col-12 col-sm-6">
                            <p class="inquiry-form__value">
                                <?php
                                if (empty($app->err[$key])) {
                                    if (strpos($value, "\n") !== false) {
                                        echo nl2br(h($value));
                                    } else {
                                        echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                    }
                                } else {
                                    echo "<span class=\"err\">{$app->err[$key]}</span>";
                                }
                                ?>
                            </p>
                        </div>
                    </div>
                    <?php endforeach; ?>

                    <div class="d-flex flex-wrap">
                        <input type="hidden" name="requiredItem[name]" value="<?php echo h($app->requiredItem["name"]); ?>">
                        <input type="hidden" name="requiredItem[mailaddress]" value="<?php echo h($app->requiredItem["mailaddress"]); ?>">
                        <input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>">
                        <input type="button" value="入力内容の修正" class="btn inquiry-form__btn inquiry-form__btn--bg mb-3" onclick="history.back();">
                        <?php if (empty($app->err) && empty($app->seriousError)) {
                            echo "<input type=\"submit\" value=\"この内容で送信\" class=\"btn inquiry-form__btn inquiry-form__btn--config mb-3\">";
                        } ?>
                    </div>
                </form>
                <?php else : ?>
                <div class="form-group confim-submit d-flex">
                    <input type="button" value="この内容で送信" class="btn btn-submit" onclick="history.back();">
                </div>
                <?php endif; ?>
                </div>
        </section>
    </main>
	
@@include('@@webRoot/parts/footer.html')